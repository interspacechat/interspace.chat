import React from 'react'
import p5 from 'p5'

class ImpossibleRing extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef()
	}

	Sketch = (p) => {
		p.setup = () => {
			// size((720, 720, P3D);
			p.createCanvas(720, 720, p.WEBGL)
			p.smooth(8)

			// Not implemented in WEBGL mode
			//    strokeCap(ROUND);

			//below loops create random (x, y) in [0, 1]x[0, 1] for the
			//star positions. There will be 'ns' stars on each face
			//of each block. There will be two different patterns since
			//each block makes PI rotation in one loop so side 0 goes to 2,
			//side 1 goes to 3 etc. So we can have maximum 2 patterns for stars
			//hence we'll use pos[i][side%2] to retrieve star positions
			for (j = 0; j < 2; j++) {
				for (i = 0; i < ns; i++) {
					pos[i][j] = createVector(random(1), random(1))
				}
			}
		}
		let t
		let ns = 62
		let nb = 11

		function createPos(rows) {
			let a = []
			for (let i = 0; i < rows; i++) {
				a[i] = []
			}
			return a
		}

		let pos = createPos(ns)

		p.draw = () => {
			t = (mouseX * 1.0) / width
			t += 0.02
			t %= 1
			background(0)
			//rotateY(mouseY*0.1/height*TAU);
			translate(width * 0.5, height * 0.5) //(0, ) is in the middle of the canvas
			ortho(
				-width / 2,
				width / 2,
				-height / 2,
				height / 2,
				width * 4,
				-width * 5
			) //NEED orthographic view
			R = 240
			r = R * 0.3
			impossible()
		}

		function vert(p) {
			vertex(p.x, p.y, p.z)
		}

		function ang(p) {
			//transformation from normal view to illusion view
			p = rotX(p, -QUARTER_PI)
			p.rotate(-QUARTER_PI)
			return p
		}

		function vectorPos(i, j, k, side) {
			//returns vector position of a point on the tube
			// 'i' is in [0, 1] (this is how far along the tube)
			// 'j' is in [0, 1] (this is how far along the width of a face of the tube)
			// ^ kinda like x and y?
			// 'side' is in {0, 1, 2, 3} (which of the 4 sides of the tube)

			v1 = rotX(createVector(0, r * k), side * HALF_PI + QUARTER_PI)
			v2 = rotX(createVector(0, r * k), (side + 1) * HALF_PI + QUARTER_PI)
			// ^ two adjacent vertices of a square
			p = p5.Vector.lerp(v1, v2, 1 - j)
			if (2 * i < 1) {
				p = rotY(
					p5.Vector.add(p, createVector(0, 0, R)),
					PI * ease(2 * i, 1) - PI
				)
			} else {
				p = p5.Vector.add(p, createVector(0, R, 0))
					.rotate(-PI * ease(2 * i - 1, 1))
					.add(createVector(0, -R, R))
			}
			return p
		}

		function impossible() {
			ni = 0 //number of vertices(/"rings") along the tube; higher for more detail
			w = 0.85 // % of the width of the block, w = 0.85 gives a 15% gap between blocks
			for (b = 0; b < nb; b++) {
				//for each block along the tube
				//////////////////////////////////////////
				//FILL
				noStroke()
				fill(0)
				ni = 40
				for (l = 0; l < 4; l++) {
					//4 times for each side of the tube
					for (i = 0; i < ni; i++) {
						q1 = ((t + b * 1.0 + (i * w) / ni) / nb) % 1
						q2 = ((t + b * 1.0 + ((i + 1) * w) / ni) / nb) % 1
						//q1 and q2 are two adjacent points along a block
						//draws a portion of the tube from q1 to q2,

						//since each block doesn't preserve orientation when going around once,
						//this causes a problem when trying to draw a section along the tube when
						//q2 goes past 1 and has looped around (back to 0 because of '%1') and q1 hasn't
						//therefore when q1 < q2 we can draw normally. Otherwise we need to draw from
						//q1 to 1 (the cutoff point), and then from 0 to q2 so it appears seamless

						if (q1 < q2) {
							beginShape(TRIANGLE_STRIP)
							vert(ang(vectorPos(q1, 0, 1, l)))
							vert(ang(vectorPos(q1, 1, 1, l)))

							vert(ang(vectorPos(q2, 0, 1, l)))
							vert(ang(vectorPos(q2, 1, 1, l)))
							endShape()
						} else {
							beginShape(TRIANGLE_STRIP)
							vert(ang(vectorPos(q1, 0, 1, l)))
							vert(ang(vectorPos(q1, 1, 1, l)))

							vert(ang(vectorPos(1, 0, 1, l)))
							vert(ang(vectorPos(1, 1, 1, l)))
							endShape()
							beginShape(TRIANGLE_STRIP)
							vert(ang(vectorPos(0, 0, 1, l)))
							vert(ang(vectorPos(0, 1, 1, l)))

							vert(ang(vectorPos(q2, 0, 1, l)))
							vert(ang(vectorPos(q2, 1, 1, l)))
							endShape()
						}
					}
				}

				//ends
				for (l = 0; l < 2; l++) {
					//both ends of each block
					q = ((t + b * 1.0 + l * w) / nb) % 1
					beginShape(TRIANGLE_STRIP)
					vert(ang(vectorPos(q, 0, 1, 0)))
					vert(ang(vectorPos(q, 0, 1, 1)))
					vert(ang(vectorPos(q, 0, 1, 3)))
					vert(ang(vectorPos(q, 0, 1, 2)))
					endShape()
				}
				///////////////////////////////////////////
				///////////////////////////////////////////

				///////////////////////////////////////////
				//OUTLINE STROKE
				noFill()
				stroke(255)
				strokeWeight(1)

				//sides
				for (l = 0; l < 4; l++) {
					for (i = 0; i < ni; i++) {
						q1 = ((t + b * 1.0 + (i * w) / ni) / nb) % 1
						q2 = ((t + b * 1.0 + ((i + 1) * w) / ni) / nb) % 1

						//the if else conditions here are a similar story to the fill above
						let p1
						let p2
						if (q1 < q2) {
							p1 = ang(vectorPos(q1, 0, 1.05, l))
							p2 = ang(vectorPos(q2, 0, 1.05, l))
							line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
						} else {
							p1 = ang(vectorPos(q1, 0, 1.05, l))
							p2 = ang(vectorPos(1, 0, 1.05, l))
							line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
							p1 = ang(vectorPos(0, 0, 1.05, l))
							p2 = ang(vectorPos(q2, 0, 1.05, l))
							line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
						}
					}
				}
				//ends
				for (l = 0; l < 2; l++) {
					//both ends of each block
					for (i = 0; i < 4; i++) {
						//each side of each block
						q = ((t + b * 1.0 + l * w) / nb) % 1
						p1 = ang(vectorPos(q, 0, 1.05, i))
						p2 = ang(vectorPos(q, 1, 1.05, i))
						line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
					}
				}
				/////////////////////////////////////////////
				/////////////////////////////////////////////

				/////////////////////////////////////////////
				//STARS
				noFill()
				//sides
				for (l = 0; l < 4; l++) {
					//each side face of the block
					for (i = 0; i < ns; i++) {
						//for each star on the face
						x = pos[i][l % 2].x
						y = pos[i][l % 2].y
						qx = ((t + b * 1.0 + x * w) / nb) % 1
						qy = y
						p = ang(vectorPos(qx, qy, 1.06, l))
						//'1.05' is so that the stars pop out a bit more and
						// aren't blocked by the black fill of the tube

						//fixes some glitches when stars reach the endpoint of the loop
						if (qx < 0.02 && (l == 1 || l == 2)) p.z = 1500
						if (qx > 0.98 && (l == 1 || l == 2)) p.z = -1500

						////////////////////
						//dynamic intensity of stars using perlin noise:
						// positions in the noise field
						nv1 = createVector(2.7, 0, 100 * (l % 2)).rotate(
							TAU * ((b * 1.0 + x + t) / nb)
						)
						nv2 = createVector(0.2, 0).rotate(TAU * t)
						// noise values for stroke and for strokeWeight
						n1 = noise(nv1.x + i, nv1.y + nv2.x, nv1.z + nv2.y)
						n2 = noise(3008 + nv1.x + i, nv1.y + nv2.x, nv1.z + nv2.y)
						stroke(ease(c01(map(n1, 0, 1, 0.1, 1.2)), 3) * 255)
						strokeWeight(
							ease(pow(c01(map(0.5 * (n1 + n2), 0, 1, 0, 1)), 2), 3) * 8 + 1
						)
						////////////////////

						point(p.x, p.y, p.z)
					}
				}
				//ends
				for (l = 0; l < 2; l++) {
					//both ends of the block
					for (j = 0; j < 4; j++) {
						//each side
						for (i = 0; i < ns / 4; i++) {
							//quarter of all stars, because they're displayed 4 times
							qx = ((t + b * 1.0 + l * w) / nb) % 1
							x = pos[i][l % 2].x
							y = pos[i][l % 2].y
							qy = y
							p = ang(vectorPos(qx, qy, 1 - pow(1 - x, 2), j))

							////////////////////
							nv1 = createVector(4, 0, 100 * (l % 2) + 100).rotate(TAU * qx)
							nv2 = createVector(0.2, 0).rotate(TAU * t)
							n1 = noise(nv1.x + i, nv1.y + nv2.x, nv1.z + nv2.y)
							n2 = noise(3008 + nv1.x + i, nv1.y + nv2.x, nv1.z + nv2.y)
							stroke(ease(c01(lerp(0.1, 1.2, n1)), 2) * 255)
							strokeWeight(
								ease(pow(c01(map(0.5 * (n1 + n2), 0, 1, 0, 1)), 2), 3) * 8 + 1
							)
							//////////////////////////

							point(p.x, p.y, p.z)
						}
					}
				}
				///////////////////////////////////////
				//////////////////////////////////////
			}
		}

		function ease(p, g) {
			if (p < 0.5) {
				return 0.5 * pow(2 * p, g)
			} else {
				return 1 - 0.5 * pow(2 * (1 - p), g)
			}
		}

		function rotX(v, th) {
			return createVector(
				v.x,
				v.y * cos(th) - v.z * sin(th),
				v.y * sin(th) + v.z * cos(th)
			)
		}
		function rotY(v, th) {
			return createVector(
				v.x * cos(th) + v.z * sin(th),
				v.y,
				v.z * cos(th) - v.x * sin(th)
			)
		}
		function c01(g) {
			return constrain(g, 0, 1)
		}
	}

	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current)
	}

	render() {
		return <div ref={this.myRef}></div>
	}
}

export default ImpossibleRing

import React, { useContext } from "react"
import styled from "@emotion/styled"
import Collapsible from "react-collapsible"

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

const SitemapStyled = styled.nav`
	text-align: left;

	.Collapsible__trigger {
		color: ${(props) => props.theme.color};
		background-color: ${(props) => props.theme.background};
		cursor: pointer;
		padding: 0.2rem;
		:hover {
			background-color: ${(props) => props.theme.highlight};
		}
	}
	.Collapsible__contentOuter {
		max-width: 300px;

		:hover {
			.Collapsible__contentInner {
			}
		}
	}
	.Collapsible__contentInner {
		padding: 0.5rem;

		a {
			color: ${(props) => props.theme.highlight};
		}
	}
`

const Grid = styled.div`
	position: relative;
	z-index: 100000000000;
	display: grid;
	grid-template-rows: repeat(10, auto);
	img {
		max-width: 100%;
		height: auto;
	}
	div {
		&:hover {
			.title {
				filter: saturate(0%);
			}
			cursor: pointer;
		}
	}
	.title {
	}
	.portal {
		transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
`

const Cell1 = styled.div`
	img {
		height: 36px;
	}
`

const Cell2 = styled.div``

const Cell3 = styled.div``

const Cell4 = styled.div``

const Cell5 = styled.div``

const Cell6 = styled.div``

const Cell7 = styled.div``

const Cell8 = styled.div``

const Cell9 = styled.div``

const Cell10 = styled.div``

const EthturinSidebar = () => {
	const { addFloatingSpace, currentFloatingSpaces } = useContext(
		FloatingSpaceContext
	)
	const space = currentFloatingSpaces

	const openInNewTab = (url) => {
		let win = window.open(url, "_blank")
		win.focus()
	}

	const poap = () => {
		if (space.indexOf("claim poap token") > -1) {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
		} else {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
			addFloatingSpace("claim poap token")
		}
	}

	return (
		<SitemapStyled>
			<Collapsible trigger="Sitemap">
				<Grid>
					<Cell2 onClick={() => addFloatingSpace("conference-room")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/2-conference-room.png")}
							alt=""
						/>
					</Cell2>
					<Cell3 onClick={() => addFloatingSpace("mentor-ring")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/3-mentor-ring.png")}
							alt=""
						/>
					</Cell3>
					<Cell4 onClick={() => addFloatingSpace("VHackathon ETH Turin")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/4-v-hackathon.png")}
							alt=""
						/>
					</Cell4>
					<Cell5 onClick={() => addFloatingSpace("livestream")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/5-livestream.png")}
							alt=""
						/>
					</Cell5>
					<Cell6 onClick={() => addFloatingSpace("calendar")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/6-schedule.png")}
							alt=""
						/>
					</Cell6>
					<Cell7 onClick={() => addFloatingSpace("new room")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/7-create-room.png")}
							alt=""
						/>
					</Cell7>
					<Cell1
						onClick={() =>
							openInNewTab(
								"https://www.cryptovoxels.com/play?coords=NW@72W,76S"
							)
						}>
						<img
							className="title"
							src={require("../img/ethturin-elements/1-stop-covid-19.png")}
							alt=""
						/>
					</Cell1>
					<Cell8 onClick={() => poap()}>
						<img
							className="title"
							src={require("../img/ethturin-elements/8-poap.png")}
							alt=""
						/>
					</Cell8>
					<Cell9 onClick={() => addFloatingSpace("discord chat")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/9-discord-chat.png")}
							alt=""
						/>
					</Cell9>
				</Grid>
			</Collapsible>
		</SitemapStyled>
	)
}

export default EthturinSidebar

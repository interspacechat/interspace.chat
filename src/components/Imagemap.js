import * as React from 'react'

function SvgImagemap (props) {
  return (
    <svg width={60} height={213} xmlns='http://www.w3.org/2000/svg' {...props}>
      <svg x={100} {...props}>
        <g id='imagemap_svg__blue_balloon'>
          <path d='M60 10c10 10-20 90 0 100' fill='transparent' stroke='gray'>
            <animate
              attributeType='XML'
              attributeName='d'
              values='M60 86 c0 10 -10 90 0 131; M60 91 c0 10 3 90 0 136; M60 93 c0 10 10 90 0 138; M60 91 c0 10 -3 90 0 136; M60 86 c0 10 -10 90 0 131'
              keyTimes='0; 0.25; 0.5; 0.75; 1'
              dur='5s'
              repeatCount='indefinite'
            />
          </path>
          <path
            d='M60 85l5 10H55z'
            fill='#87a8bc'
            stroke='transparent'
            opacity={0.9}
          >
            <animate
              attributeType='XML'
              attributeName='d'
              values='M60 86 l3 10 l-6 0 z; M60 91 l3 10 l-6 0 z; M60 93 l3 10 l-6 0 z; M60 91 l3 10 l-6 0 z; M60 86 l3 10 l-6 0 z'
              keyTimes='0;0.25;0.5;0.75;1'
              dur='2.5s'
              repeatCount='indefinite'
            />
          </path>
          <ellipse
            cx={60}
            cy={50}
            rx={30}
            ry={40}
            stroke='transparent'
            fill='#b6e4ff'
            opacity={0.9}
          >
            <animate
              attributeType='XML'
              attributeName='cy'
              values='50;55;57;55;50'
              keyTimes='0;0.25;0.5;0.75;1'
              dur='2.5s'
              repeatCount='indefinite'
            />
          </ellipse>
          <ellipse
            cx={60}
            cy={43}
            rx={30}
            ry={40}
            stroke='transparent'
            fill='url(#imagemap_svg__balloon_shine)'
          >
            <animate
              attributeType='XML'
              attributeName='cy'
              values='50;55;57;55;50'
              keyTimes='0;0.25;0.5;0.75;1'
              dur='2.5s'
              repeatCount='indefinite'
            />
          </ellipse>
        </g>
      </svg>
    </svg>
  )
}

export default SvgImagemap

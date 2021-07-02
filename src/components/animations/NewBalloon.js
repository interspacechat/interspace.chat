import * as React from 'react'

function SvgImagemap (props) {
  const ballooncolor = props.color
  return (
    <svg width={120} height={300} xmlns='http://www.w3.org/2000/svg' {...props}>
      <defs>
        <radialGradient
          id='balloon_shine'
          cx='0.5'
          cy='0.5'
          fx='0.25'
          fy='0.25'
          spreadMethod='pad'
        >
          <stop offset='0%' stop-color='white' stop-opacity='0.5' />
          <stop offset='70%' stop-color='white' stop-opacity='0' />
          <stop offset='100%' stop-color='black' stop-opacity='0.1' />
        </radialGradient>
        <filter id='shadow'>
          <feDropShadow dx='0.2' dy='0.4' stdDeviation='0.2' />
        </filter>
      </defs>
      <svg x={0} {...props}>
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
            fill={ballooncolor}
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
            fill={ballooncolor}
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
            fill='url(#balloon_shine)'
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

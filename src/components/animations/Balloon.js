import React from 'react'

import SvgImagemap from './NewBalloon'


const Balloon = props => {
  const { color, width, height } = props

  const style = {
    height: `${height}`,
    width: `${width}`
  }

  return <SvgImagemap color={color} />
}

export default Balloon

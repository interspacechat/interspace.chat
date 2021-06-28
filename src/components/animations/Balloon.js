import React from 'react'
import Lottie from 'lottie-react'
import red from './balloon_red.json'
import black from './balloon_black.json'
import blue from './balloon_blue.json'
import white from './balloon_white.json'
import pink from './balloon_pink.json'

const Balloon = props => {
  const { color, width, height } = props

  const style = {
    height: `${height}`,
    width: `${width}`
  }

  if (color === 'red') {
    return <Lottie animationData={red} />
  } else if (color === 'blue') {
    return <Lottie animationData={blue} />
  } else if (color === 'white') {
    return <Lottie animationData={white} />
  } else if (color === 'pink') {
    return <Lottie animationData={pink} />
  } else {
    return <Lottie animationData={black} />
  }
}

export default Balloon

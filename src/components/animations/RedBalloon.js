import React from 'react'
import Lottie from 'lottie-react'
import red from './balloon_red.json'

const RedBalloon = ({ width }) => {
  return <Lottie animationData={red} width={width} />
}

export default RedBalloon

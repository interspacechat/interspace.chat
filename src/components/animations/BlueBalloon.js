import React from 'react'
import Lottie from 'lottie-react'
import blue from './balloon_blue.json'

const BlueBalloon = ({ width }) => {
  return <Lottie animationData={blue} style={{ width: { width } }} />
}

export default BlueBalloon

import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

function YoutubeInstance ({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState('U3QsM_UDah0')
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
  const space = currentFloatingSpaces

  useEffect(() => {
    if (space.indexOf('main-room') > -1) {
      setYoutubeRoom('z3qAitImQDs')
    } else {
      setYoutubeRoom('z3qAitImQDs')
    }
    return console.log(youtubeRoom)
  }, [space, youtubeRoom])
  return (
    <iframe
      title='Youtube Livestream'
      width='100%'
      height='100%'
      src={`https://www.youtube-nocookie.com/embed/${youtubeRoom}`}
      frameBorder='0'
      allow='accelerometer; autoplay="true"; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      style={{ borderRadius: '20px' }}
    />
  )
}

export default YoutubeInstance

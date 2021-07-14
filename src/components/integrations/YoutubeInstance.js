import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

function YoutubeInstance ({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState(
    'PLhM7rBgpVV-K3Dko5_PUhwy0DnwzR1lgN'
  )
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
  const space = currentFloatingSpaces

  useEffect(() => {
    if (space.indexOf('Main Stage') > -1) {
      setYoutubeRoom('PLhM7rBgpVV-K3Dko5_PUhwy0DnwzR1lgN')
    } else if (space.indexOf('Monge') > -1) {
      setYoutubeRoom('PLSJ8gU1sECuzD_Kwyx8smP7KcP2K3mL6B')
    } else if (space.indexOf('Saint Germain') > -1) {
      setYoutubeRoom('PL-owlDp9BBav-Zd0G6AbH6-FYel1nk2u3')
    } else if (space.indexOf('Sorbonne') > -1) {
      setYoutubeRoom('PLM-Xjhvin-uVUa4hJuuTigeenqGsB_wZl')
    } else if (space.indexOf('Poissy') > -1) {
      setYoutubeRoom('PLUt355rCCNrSxfYwIRdUMEeuMrgAEoBbF')
    } else if (space.indexOf('Pontoise') > -1) {
      setYoutubeRoom('PLqL60kqgLPBDL1g7Gn3mHa1oW_88WwhSn')
    } else {
      setYoutubeRoom('PLhM7rBgpVV-K3Dko5_PUhwy0DnwzR1lgN')
    }
    return console.log(youtubeRoom)
  }, [space, youtubeRoom])
  return (
    <iframe
      title='Youtube Livestream'
      width='100%'
      height='100%'
      src={`https://www.youtube-nocookie.com/embed/videoseries?list=${youtubeRoom}`}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  )
}

export default YoutubeInstance

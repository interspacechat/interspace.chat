import React, { useContext } from 'react'
import styled from '@emotion/styled'
import YoutubeInstance from './integrations/YoutubeInstance'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import useWindowDimensions from '../utils/useWindowDimensions'

import tvImage from '../img/dod-tv.png'
import statueImage from '../img/dod-tv1.png'
import dodTv from '../img/dod-tv-transparent-frame.png'

const Container = styled.div`
  display: grid;
 /** background-image: url(${tvImage}); */
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: clip;
  background-color: black;
`

const TV = styled.div`
  align-self: center;
  justify-self: center;
  z-index: 1;
  position: absolute;
  top: 23%;
  left: 25%;
`

const Statue = styled.img`
  position: absolute;
  z-index: 2;
  pointer-events: none;
`

function SvgImagemap(props) {
  const { addFloatingSpace, currentFloatingSpaces } = useContext(
    FloatingSpaceContext
  )
  const space = currentFloatingSpaces
  const { height, width } = useWindowDimensions()

  const openInNewTab = (url) => {
    let win = window.open(url, '_blank')
    win.focus()
  }

  const poap = () => {
    if (space.indexOf('claim poap token') > -1) {
      window.alert(
        'To claim your Solidity Summit POAP token, please write a private message to @franzihei on Gitter, including a short note on what you liked best about the event. You will then receive a link to redeem your POAP badge.'
      )
    } else {
      window.alert(
        'To claim your Solidity Summit POAP token, please write a private message to @franzihei on Gitter, including a short note on what you liked best about the event. You will then receive a link to redeem your POAP badge.'
      )
    }
  }

  return (
    <Container>
      <Statue src={dodTv} width='100%' height='100%' />
      <TV style={{ width: width / 2, height: height / 2.1 }}>
        <YoutubeInstance />
      </TV>
    </Container>
  )
}

export default SvgImagemap

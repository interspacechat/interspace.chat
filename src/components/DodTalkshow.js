import React, { useContext } from 'react'
import styled from '@emotion/styled'
import YoutubeInstance from './integrations/YoutubeInstance'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import useWindowDimensions from '../utils/useWindowDimensions'

import tvImage from '../img/dod-tv.png'
import dodTv from '../img/dod-tv-transparent-frame1.png'

import guide from '../img/dod-links/guide.png'
import chat from '../img/dod-links/chat.png'
import about from '../img/dod-links/about.png'
import producedby from '../img/dod-links/producedby.png'

const Container = styled.div`
  display: grid;
 /** background-image: url(${tvImage}); */
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: clip;
  background-color: black;
`

const Tv = styled.div`
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

const PoweredBy = styled.img`
  position: absolute;
  z-index: 2;
  width: 20vw;
  bottom: 5%;
  left: 40vw;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const LinkContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  position: absolute;
  z-index: 2;
  right: 5%;
  bottom: 30%;
  grid-gap: 1rem;
`

const ImageButton = styled.img`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

function SvgImagemap (props) {
  const { addFloatingSpace, currentFloatingSpaces } = useContext(
    FloatingSpaceContext
  )
  const space = currentFloatingSpaces
  const { height, width } = useWindowDimensions()

  const openInNewTab = url => {
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
      <Statue src={dodTv} width='100%' height='100%' alt='' />
      <Tv style={{ width: width / 2, height: height / 2.1 }}>
        <YoutubeInstance />
      </Tv>
      <LinkContainer>
        <ImageButton
          src={chat}
          alt='chat'
          height='30px'
          width='auto'
          onClick={() => addFloatingSpace('teletext chat')}
        />
        <ImageButton
          src={guide}
          alt='event guide'
          height='30px'
          width='auto'
          onClick={() => addFloatingSpace('tv guide')}
        />
        <ImageButton
          src={about}
          alt='about'
          height='30px'
          width='auto'
          onClick={() => addFloatingSpace('credits')}
        />
      </LinkContainer>
      <PoweredBy
        src={producedby}
        alt=''
        onClick={() => openInNewTab('https://decentralala.com')}
      />
    </Container>
  )
}

export default SvgImagemap

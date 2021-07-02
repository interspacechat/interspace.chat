import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Balloon from './animations/Balloon'
import EthCClogo from '../img/ethcc/ethcclogo.png'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

const ImagemapContainer = styled.div`
  // margin: auto auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(1, auto);
  justify-items: center;
  @media (max-width: 1620px) {
    grid-template-columns: repeat(7, 1fr);
  }
  img {
  }
  div {
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    border-radius: 300px;
    border: 2px solid #ffffff00;
    max-height: 300px;
    max-width: 80px;
    align-self: center6;
    color: #e6e6e6;
    h1 {
      text-align: center;
    }
    h1 span {
      color: #b30602;
      font-size: 2rem;
    }
    &:hover {
      svg {
        // border: 2px solid #b30602aa;
        // transform: scale(1.2);
        filter: drop-shadow(8px 8px 10px gray);
      }
      h1 {
        color: #b30602;
      }
      .portal {
        filter: drop-shadow(8px 8px 10px gray);
      }
      .title {
        // transform: scale(1.2) translateY(40px);
        opacity: 1;
        z-index: 2;
      }
      .bleu {
        color: #082d75;
      }
      cursor: pointer;
    }
  }
  .title {
    font-size: 0.8rem;
    opacity: 0.5;
    place-self: center;
    text-align: center;
    position: relative;
    transform: translateY(60px);
  }
  .portal {
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const Cell1 = styled.div`
  //transform: scale(1.5);
  display: grid;
  // grid-row: 2;
  grid-column: 1;
`

const Cell2 = styled.div`
  // transform: scale(1.5) translate(-100px, 0px);
  display: grid;
  // grid-row: 2;
  grid-column: 2;
`

const Cell3 = styled.div`
  // transform: scale(1.5);
  display: grid;
  // grid-row: 2;
  grid-column: 3;
`

const Cell4 = styled.div`
  // transform: scale(1.5);
  display: grid;
  // grid-row: 2;
  grid-column: 11;
  @media (max-width: 1620px) {
    grid-row: 1;
    grid-column: 5;
  }
`

const Cell5 = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  grid-row: 1;
  grid-column: 7;
  .portal {
    // position: absolute;
    // transform: translateY(0px);
    max-height: 300px;
    max-width: 120px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  .title {
    transform: translateY(10px);
    font-size: 1.5rem;
    color: black;
    margin: 0 auto;
  }
  &:hover .title {
    opacity: 1;
  }
  @media (max-width: 1620px) {
    grid-row: 1 / span 2;
    grid-column: 4;
    margin: auto auto;
  }
`
const Cell6 = styled.div`
  // transform: scale(1.5) translate(100px, 0px);
  display: grid;
  // grid-row: 2;
  grid-column: 12;
  @media (max-width: 1620px) {
    grid-row: 1;
    grid-column: 6;
  }
`

const Cell7 = styled.div`
  // transform: scale(1.5);
  display: grid;
  // grid-row: 2;
  grid-column: 13;
  @media (max-width: 1620px) {
    grid-row: 1;
    grid-column: 7;
  }
`

const Cell8 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 4;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 1;
  }
`

const Cell9 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 5;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 2;
  }
`

const Cell10 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 6;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 3;
  }
`
const Cell11 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 8;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 5;
  }
`

const Cell12 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 9;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 6;
  }
`

const Cell13 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 10;
  @media (max-width: 1620px) {
    grid-row: 2;
    grid-column: 7;
  }
`

const BottomLinks = styled.span`
  padding: 4rem;
  grid-row: 3;
  grid-column: 1 / span 7;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  justify-self: center;
  justify-items: center;
  div {
    text-align: center;
    padding: 1rem;
    :hover {
      transform: scale(1.2);
    }
  }
`

const EthCC = () => {
  const { addFloatingSpace, currentFloatingSpaces } = useContext(
    FloatingSpaceContext
  )
  const space = currentFloatingSpaces

  const openInNewTab = url => {
    let win = window.open(url, '_blank')
    win.focus()
  }

  const notYet = () => {
    alert('Live on July 12th')
  }

  const poap = () => {
    if (space.indexOf('claim poap token') > -1) {
      window.alert(
        'To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem.'
      )
    } else {
      window.alert(
        'To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem.'
      )
      addFloatingSpace('claim poap token')
    }
  }

  return (
    <ImagemapContainer>
      <Grid>
        <Cell5
          onClick={() => openInNewTab('https://ethcc.io')}
          className='click-zone'
        >
          <img className='portal' src={EthCClogo} alt='' />
          <h1 className='title'>
            <strong style={{ fontSize: '2rem' }}>
              EthCC<span>[4]</span>
            </strong>
          </h1>
        </Cell5>
        <Cell1 onClick={() => addFloatingSpace('stream1')}>
          <h1 className='title'>STREAM_1</h1>
          <Balloon className='portal' color='#082d75' />
        </Cell1>
        <Cell2 onClick={() => addFloatingSpace('stream2')}>
          <h1 className='title'>STREAM_2</h1>
          <Balloon className='portal' color='#082d75' />
        </Cell2>
        <Cell3 onClick={() => addFloatingSpace('stream3')}>
          <h1 className='title'>STREAM_3</h1>
          <Balloon className='portal' color='#082d75' />
        </Cell3>
        <Cell4 onClick={() => addFloatingSpace('stream4')}>
          <h1 className='title'>STREAM_4</h1>
          <Balloon className='portal' color='#082d75' />
        </Cell4>
        <Cell6 onClick={() => addFloatingSpace('stream5')}>
          <h1 className='title'>STREAM_5</h1>
          <Balloon className='portal' color={'#082d75'} />
        </Cell6>
        <Cell7 onClick={() => addFloatingSpace('stream6')}>
          <h1 className='title'>STREAM_6</h1>
          <Balloon className='portal' color={'#082d75'} />
        </Cell7>
        <Cell8 onClick={() => addFloatingSpace('Status Chat')}>
          <h1 className='title bleu'>Chat</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell8>
        <Cell9 onClick={() => poap()}>
          <h1 className='title bleu'>POAP</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell9>
        <Cell10 onClick={() => openInNewTab('https://twitter.com/ethcc')}>
          <h1 className='title bleu'>Twitter</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell10>
        <Cell11 onClick={() => addFloatingSpace('OpenSea')}>
          <h1 className='title bleu'>Auction</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell11>
        <Cell12 onClick={() => addFloatingSpace('Sponsorships')}>
          <h1 className='title bleu'>Sponsors</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell12>
        <Cell13 onClick={() => addFloatingSpace('Schedule')}>
          <h1 className='title bleu'>Schedule</h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell13>
      </Grid>
    </ImagemapContainer>
  )
}

export default EthCC

import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Balloon from './animations/Balloon'
import EthCClogo from '../img/ethcc/ethcclogo.png'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

const ImagemapContainer = styled.div`
  max-width: 40vw;
  margin: auto auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  img {
    max-width: 100%;
    height: auto;
  }
  div {
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    border-radius: 300px;
    border: 2px solid #ffffff00;
    max-height: 300px;
    &:hover {
      div {
        border: 2px solid #b30602aa;
      }
      h1 {
        color: #b30602;
      }
      .portal {
        filter: drop-shadow(8px 8px 10px gray);
      }
      .title {
        opacity: 1;
      }
      cursor: pointer;
    }
  }
  .title {
    font-size: 0.8rem;
    opacity: 0.5;
    place-self: center;
    position: absolute;
  }
  .portal {
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const Cell1 = styled.div`
  transform: scale(1.5);
  display: grid;
  grid-row: 1;
  grid-column: 1;
`

const Cell2 = styled.div`
  transform: scale(1.5) translate(-100px, 0px);
  display: grid;
  grid-row: 2;
  grid-column: 1;
`

const Cell3 = styled.div`
  transform: scale(1.5);
  display: grid;
  grid-row: 3;
  grid-column: 1;
`

const Cell4 = styled.div`
  transform: scale(1.5);
  display: grid;
  grid-row: 1;
  grid-column: 3;
`

const Cell5 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  width: auto;
  grid-row: 2;
  grid-column: 2;
  .portal {
    position: absolute;
    max-height: 300px;
    max-width: 180px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  .title {
    position: relative;
    align-self: flex-end;
    transform: translateY(70px);
    margin: 0 auto;
    left: 0;
    right: 0;
    font-size: 1.5rem;
  }
  &:hover .title {
    opacity: 1;
  }
`
const Cell6 = styled.div`
  transform: scale(1.5) translate(100px, 0px);
  display: grid;
  grid-row: 2;
  grid-column: 3;
`

const Cell7 = styled.div`
  transform: scale(1.5);
  display: grid;
  grid-row: 3;
  grid-column: 3;
`

const Cell8 = styled.div`
  display: flex;

  .title {
    position: relative;
    transform: translate(400%, 50%);
  }
  .portal {
    align-self: end;
  }
  &:hover .title {
    opacity: 1;
  }
`

const Cell9 = styled.div`
  display: flex;
  &:hover .title {
    opacity: 1;
  }
  .title {
  }
`

const Cell10 = styled.div`
  display: flex;
  .title {
  }
  &:hover .title {
    opacity: 1;
  }
`
const Cell11 = styled.div`
  display: flex;
  .title {
  }
  &:hover .title {
    opacity: 1;
  }
`

const BottomLinks = styled.span`
  padding: 4rem;
  grid-row: 4;
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: repeat(4, 150px);
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
        <Cell5 onClick={() => addFloatingSpace('Schedule')}>
          <img className='portal' src={EthCClogo} alt='' />
          <h1 className='title'>
            EthCC <br />
            <strong>SCHEDULE</strong>
          </h1>
        </Cell5>
        <Cell1 onClick={() => addFloatingSpace('stream1')}>
          <h1 className='title'>STREAM_1</h1>
          <Balloon
            className='portal'
            color='blue'
            width={'400px'}
            height={'auto'}
          />
        </Cell1>
        <Cell2 onClick={() => addFloatingSpace('stream2')}>
          <h1 className='title'>STREAM_2</h1>
          <Balloon
            className='portal'
            color='white'
            width={'400px'}
            height={'auto'}
          />
        </Cell2>
        <Cell3 onClick={() => addFloatingSpace('stream3')}>
          <h1 className='title'>STREAM_3</h1>
          <Balloon
            className='portal'
            color='red'
            width={'400px'}
            height={'auto'}
          />
        </Cell3>
        <Cell4 onClick={() => addFloatingSpace('stream4')}>
          <h1 className='title'>STREAM_4</h1>
          <Balloon
            className='portal'
            color='blue'
            width={'400px'}
            height={'auto'}
          />
        </Cell4>
        <Cell6 onClick={() => addFloatingSpace('stream5')}>
          <h1 className='title'>STREAM_5</h1>
          <Balloon className='portal' color={'white'} width={'400px'} />
        </Cell6>
        <Cell7 onClick={() => addFloatingSpace('stream6')}>
          <h1 className='title'>STREAM_6</h1>
          <Balloon className='portal' color={'red'} width={'400px'} />
        </Cell7>
        <BottomLinks>
          <Cell8 onClick={() => addFloatingSpace('Status Chat')}>
            <h1 className='portal'>Status Chat</h1>
          </Cell8>
          <Cell9 onClick={() => poap()}>
            <h1 className='portal'>POAP</h1>
          </Cell9>
          <Cell10 onClick={() => openInNewTab('https://twitter.com/ethcc')}>
            <h1 className='portal'>Twitter</h1>
          </Cell10>
          <Cell11 onClick={() => addFloatingSpace('OpenSea')}>
            <h1 className='portal'>Auction</h1>
          </Cell11>
        </BottomLinks>
      </Grid>
    </ImagemapContainer>
  )
}

export default EthCC

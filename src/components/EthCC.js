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
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, auto);
  justify-items: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 0.8fr;
  @media (max-width: 1400px) {
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
    align-self: center;
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
        filter: drop-shadow(1px 1px 4px gray);
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
  transform: translateY(-80px) translateX(-80px);
  display: grid;
  grid-row: 2;
  grid-column: 1;
  .title {
    transform: translateY(70px);
  }
`

const Cell2 = styled.div`
  // transform: scale(1.5) translate(-100px, 0px);
  transform: translateY(0px) translateX(-80px);
  display: grid;
  grid-row: 2;
  grid-column: 2;
  .title {
    transform: translateY(70px);
  }
`

const Cell3 = styled.div`
  // transform: scale(1.5);
  transform: translateY(80px) translateX(-80px);
  display: grid;
  grid-row: 2;
  grid-column: 3;
  .title {
    transform: translateY(70px);
  }
`

const Cell4 = styled.div`
  // transform: scale(1.5);
  transform: translateY(80px) translateX(80px);
  display: grid;
  grid-row: 2;
  grid-column: 5;
  .title {
    transform: translateY(70px);
  }
`

const Cell5 = styled.div`
  display: grid;
  grid-row: 1 / span 2;
  grid-column: 4;
  place-content: center;

  .portal {
    // position: absolute;
    transform: scale(1.2);
    max-height: 400px;
    max-width: 170px;
  }
  .title {
    transform: translateY(40px);
    font-size: 1.5rem;
    color: black;
    margin: 0 auto;
  }
  &:hover .title {
    opacity: 1;
  }
`
const Cell6 = styled.div`
  // transform: scale(1.5) translate(100px, 0px);
  transform: translateY(0px) translateX(80px);
  display: grid;
  grid-row: 2;
  grid-column: 6;
  .title {
    transform: translateY(70px);
  }
`

const Cell7 = styled.div`
  // transform: scale(1.5);
  transform: translateY(-80px) translateX(80px);
  display: grid;
  grid-row: 2;
  grid-column: 7;
  .title {
    transform: translateY(70px);
  }
`

const Cell8 = styled.div`
  transform: translateY(-0px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 1;
  .title {
    transform: translateY(70px);
  }
`

const Cell9 = styled.div`
  transform: translateY(-50px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 2;
  .title {
    transform: translateY(60px);
  }
`

const Cell10 = styled.div`
  transform: translateY(-90px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 3;
  .title {
    transform: translateY(60px);
  }
`
const Cell11 = styled.div`
  transform: translateY(-90px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 5;
  .title {
    transform: translateY(60px);
  }
`

const Cell12 = styled.div`
  transform: translateY(-50px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 6;
  .title {
    transform: translateY(60px);
  }
`

const Cell13 = styled.div`
  transform: translateY(-0px) translateX(0px);
  display: grid;
  grid-row: 1;
  grid-column: 7;
  .title {
    transform: translateY(60px);
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
    alert('Live on July 20th')
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
        <Cell5 onClick={() => addFloatingSpace('EthCC')} className='click-zone'>
          <img className='portal' src={EthCClogo} alt='' />
          <h1 className='title'>
            <strong style={{ fontSize: '2rem' }} className='bleu'>
              EthCC<span>[4]</span>
            </strong>
          </h1>
        </Cell5>
        <Cell1 onClick={() => addFloatingSpace('Main Stage')}>
          <h1 className='title'>
            Main
            <br />
            Stage
          </h1>
          <Balloon className='portal' color='#082d75' />
        </Cell1>
        <Cell2 onClick={() => addFloatingSpace('Monge')}>
          <h1 className='title'>
            Monge
            <br />
          </h1>
          <Balloon className='portal' color='#082d75' />
        </Cell2>
        <Cell3 onClick={() => addFloatingSpace('Saint Germain')}>
          <h1 className='title'>
            Saint
            <br />
            Germain
          </h1>
          <Balloon className='portal' color='#082d75' />
        </Cell3>
        <Cell4 onClick={() => addFloatingSpace('Sorbonne')}>
          <h1 className='title'>
            Sorbonne
            <br />
          </h1>
          <Balloon className='portal' color='#082d75' />
        </Cell4>
        <Cell6 onClick={() => addFloatingSpace('Poissy')}>
          <h1 className='title'>
            Poissy
            <br />
          </h1>
          <Balloon className='portal' color={'#082d75'} />
        </Cell6>
        <Cell7 onClick={() => addFloatingSpace('Pontoise')}>
          <h1 className='title'>
            Pontoise
            <br />
          </h1>
          <Balloon className='portal' color={'#082d75'} />
        </Cell7>
        <Cell8 onClick={() => addFloatingSpace('Status Chat')}>
          <h1 className='title bleu'>
            Status
            <br />
            Chat
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell8>
        <Cell9 onClick={() => notYet()}>
          <h1 className='title bleu'>
            POAP
            <br />{' '}
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell9>
        <Cell10 onClick={() => addFloatingSpace('Twitter')}>
          <h1 className='title bleu'>
            Twitter
            <br />{' '}
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell10>
        <Cell11 onClick={() => addFloatingSpace('OpenSea')}>
          <h1 className='title bleu'>
            Auction
            <br />{' '}
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell11>
        <Cell12 onClick={() => addFloatingSpace('Sponsorships')}>
          <h1 className='title bleu'>
            Sponsors
            <br />{' '}
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell12>
        <Cell13 onClick={() => addFloatingSpace('Schedule')}>
          <h1 className='title bleu'>
            Schedule
            <br />{' '}
          </h1>
          <Balloon className='portal' color={'#b30602'} />
        </Cell13>
      </Grid>
    </ImagemapContainer>
  )
}

export default EthCC

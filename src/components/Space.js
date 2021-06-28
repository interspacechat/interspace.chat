import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { BrowserView, MobileView } from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import SvgImagemap from './Sovrython'
import SvgImagemapMobile from './SovrythonMobile'

import ParalleleLogo from '../img/parallele-black.png'
import InterspaceLogo from '../img/sovrython/Interspacechat-logo.svg'

// Gold Sponsorhip Tier
import EthCCLogo from '../img/ethcc-sponsors/gold/ethcc.png'
import AnomaLogo from '../img/ethcc-sponsors/gold/anoma.png'

// Silver Sponsorship Tier
import AaveLogo from '../img/ethcc-sponsors/silver/aave.png'
import LedgerLogo from '../img/ethcc-sponsors/silver/ledger.jpg'
import NearLogo from '../img/ethcc-sponsors/silver/near.svg'
import PictorLogo from '../img/ethcc-sponsors/silver/pictor-john.png'
import StatusLogo from '../img/ethcc-sponsors/silver/status.png'
import YapLogo from '../img/ethcc-sponsors/silver/yap.png'

// Bronze Sponsorship Tier
import OneinchLogo from '../img/ethcc-sponsors/bronze/1inch.png'
import Api3Logo from '../img/ethcc-sponsors/bronze/api3.svg'
import BosonLogo from '../img/ethcc-sponsors/bronze/boson.png'
import CartoonbaseLogo from '../img/ethcc-sponsors/bronze/cartoonbase.png'
import CeloLogo from '../img/ethcc-sponsors/bronze/celo.jpg'
import ChainlinkLogo from '../img/ethcc-sponsors/bronze/chainlink.png'
import EfLogo from '../img/ethcc-sponsors/bronze/ef.png'
import HermezLogo from '../img/ethcc-sponsors/bronze/hermez.png'
import IexecLogo from '../img/ethcc-sponsors/bronze/iexec.png'
import ParaswapLogo from '../img/ethcc-sponsors/bronze/paraswap.png'
import RaidenLogo from '../img/ethcc-sponsors/bronze/raiden.png'
import StakeLogo from '../img/ethcc-sponsors/bronze/stake.svg'
import SwarmLogo from '../img/ethcc-sponsors/bronze/swarm.svg'
import WitnetLogo from '../img/ethcc-sponsors/bronze/witnet.png'

// Iron Sponsorship Tier
import EightyeightmphLogo from '../img/ethcc-sponsors/iron/88mph.svg'
import AmazonLogo from '../img/ethcc-sponsors/iron/amazon.jpg'
import ApwineLogo from '../img/ethcc-sponsors/iron/apwine.png'
import ArcadiaLogo from '../img/ethcc-sponsors/iron/arcadia.svg'
import AudiusLogo from '../img/ethcc-sponsors/iron/audius.png'
import AurorastackLogo from '../img/ethcc-sponsors/iron/aurora-stack.png'
import ComethLogo from '../img/ethcc-sponsors/iron/cometh.svg'
import DypLogo from '../img/ethcc-sponsors/iron/dyp.svg'
import HoardexchangeLogo from '../img/ethcc-sponsors/iron/hoard.png'
import HoprLogo from '../img/ethcc-sponsors/iron/hopr.png'
import KaikoLogo from '../img/ethcc-sponsors/iron/kaiko.png'
import KlerosLogo from '../img/ethcc-sponsors/iron/kleros.png'
import PolygonLogo from '../img/ethcc-sponsors/iron/polygon.png'
import QuantstampLogo from '../img/ethcc-sponsors/iron/quantstamp.png'
import StarkwareLogo from '../img/ethcc-sponsors/iron/starkware.svg'
import ThegraphLogo from '../img/ethcc-sponsors/iron/thegraph.png'

import GitcoinLogo from '../img/sovrython/Gitcoin-logo.svg'
import InterlayLogo from '../img/sovrython/interlay-logo.png'
import CovalentLogo from '../img/sovrython/covalent-logo.svg'
import EnsLogo from '../img/sovrython/ens-logo.svg'
import EthworksLogo from '../img/sovrython/ethworks-logo.svg'

import EthCC from './EthCC'
import EthturinMobile from './EthturinMobile'

const Header = styled.span``

const SponsorContainer = styled.div`
  width: 100%;
  // background-color: #b30602;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SponsorContainer2 = styled.div`
  width: 100%;
  background-color: #082d75;
  color: whitesmoke;
  align-items: center;
  display: flex;
  height: 50px;

  h1 {
    font-size: 2rem;
    padding: 1rem;
    :hover {
      filter: drop-shadow(0px 0px 5px #ffffff);
    }
  }

  h1 span {
    color: #b30602;
    font-size: 2rem;
  }
`

const PoweredByGold = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  grid-gap: 3rem;
  img {
    padding: 0.5rem;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const PoweredBySilver = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, auto);
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  grid-gap: 2rem;
  img {
    place-self: center;
    padding: 0.5rem;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const PoweredByBronze = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(7, auto);
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  grid-gap: 2rem;
  img {
    place-self: center;
    padding: 0.5rem;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const PoweredByIron = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  grid-gap: 2rem;
  img {
    place-self: center;
    padding: 0.5rem;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const PoweredBy = styled.div`
  display: grid;
  width: 40vw;
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  margin: 0 auto;
  align-items: center;
  padding: 1rem;
  grid-gap: 3rem;
  img {
    padding: 0.5rem;
  }
`

const PoweredByMobile = styled.div`
  width: 80vw;
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  left: 0;
  right: 0;
  align-items: center;
  img {
    margin: 0 auto;
  }
`

const Provider = styled.img`
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: opacity(0.6);
  cursor: pointer;
  padding: 0.5rem;
  :hover {
    filter: opacity(1);
  }
`

const ImagemapContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  margin: auto auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow-y: auto;
`

const ImagemapContainerMobile = styled.div`
  display: grid;
  place-items: center;
  min-height: 80vh;
`

const Headline = styled.h6`
  color: black;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 1rem;

  a {
    font-weight: 300;
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.background};
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    background-color: whitesmoke;
  }
`

const SpaceSelector = styled.div`
  .space-container {
    height: 100vh;
    display: grid;
  }
`

const SpaceInfo = styled.div`
  text-align: center;
  bottom: 1rem;
  left: 50%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 300;
  div {
    color: ${props => props.theme.body};
  }
`

const Descripton = styled.div`
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  p {
    padding: 0.5rem;
    margin: 0px;
  }

  a {
    padding: 0px;
  }
  @media (max-width: 600px) {
    text-align: block;
    place-self: center;
    margin: 0 auto;
    padding: 2rem;

    a {
      padding: 0.5rem;
    }
  }
`

const CurrentSpace = styled.span`
  color: ${props => props.theme.highlight};
`

const StrongStyled = styled.strong`
  font-weight: 700;
`

const Triangle = styled.img`
  align-self: baseline;
`

const ShowSection = () => {
  const [isHidden, toggleHidden] = useState(false)
  const onClick = () => {
    isHidden ? toggleHidden(false) : toggleHidden(true)
  }

  const ButtonContainer = styled.div`
    position: absolute;
    background-color: ${props => props.theme.background};
    opacity: 0.95;
    width: 100%;
    height: 100%;
    display: grid;
    justify-self: center;
    justify-content: end;
  `
  const CloseButton = styled.button`
    background: unset;
    border: 1px solid ${props => props.theme.highlight};
    border-radius: 100px;
    color: ${props => props.theme.highlight};
    font-size: 2rem;
    font-weight: 100;
    padding: 1rem;
    justify-self: center;
    align-self: start;
    & :focus {
      filter: invert(100%);
    }
  `
  return (
    <div>
      {isHidden ? null : (
        <ButtonContainer>
          {isHidden ? null : <Element />}
          <CloseButton onClick={onClick}>
            {isHidden ? '' : 'Close this message'}
          </CloseButton>
        </ButtonContainer>
      )}
    </div>
  )
}
const Element = () => (
  <Descripton>
    <p>
      This website is optimized for <StrongStyled>desktop</StrongStyled>.{' '}
    </p>
    <p>To join the video-chat on your mobile, download the Jitsi Mobile App.</p>
    <p>Sovrython livestream hosted by Parallele.at:</p>
    <a href='https://www.youtube.com/channel/UCsF67FGXtv4lplQyQSPizbQ'>
      Parallele Polis Youtube channel
    </a>
  </Descripton>
)

const Space = () => {
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)

  const space = currentFloatingSpaces

  let displayedJoinedSpaces
  if (space.length > 0) {
    if (space.length > 2) {
      let nameCount = space.length
      displayedJoinedSpaces =
        space.slice(0, nameCount - 2).join(', ') +
        ', ' +
        space.slice(nameCount - 2, nameCount).join(' & ')
    } else {
      displayedJoinedSpaces = space.join(' & ')
    }
  }

  const openInNewTab = url => {
    let win = window.open(url, '_blank')
    win.focus()
  }

  {
    /**
  useEffect(() => {
    var Sidecar = require("gitter-sidecar");

    var myChat = new Sidecar({
      room: "ethereum/solidity",
      activationElement: false,
    });
  });
   */
  }

  return (
    <SpaceSelector>
      <BrowserView viewClassName='space-container'>
        <SponsorContainer2
          className='click-zone'
          onClick={() => openInNewTab('/')}
        >
          <img
            src={EthCCLogo}
            width='25px'
            height='auto'
            alt='ethcc4'
            style={{ padding: '1rem' }}
          />
          <h1>
            EthCC<span>[4]</span> - July 20-22, 2021
          </h1>
        </SponsorContainer2>
        <EthCC />
        <SponsorContainer>
          <PoweredByGold>
            <Provider
              src={EthCCLogo}
              width='auto'
              height='60px'
              alt='EthCC'
              onClick={() => openInNewTab('https://ethcc.io/')}
            />
            <Provider
              src={AnomaLogo}
              width='auto'
              height='60px'
              alt='Anoma'
              onClick={() => openInNewTab('https://anoma.network/')}
            />
          </PoweredByGold>
          <PoweredBySilver>
            <Provider
              src={AaveLogo}
              width='auto'
              height='35px'
              alt='Aave'
              onClick={() => openInNewTab('https://aave.com/')}
            />
            <Provider
              src={LedgerLogo}
              width='auto'
              height='35px'
              alt='Ledger'
              onClick={() => openInNewTab('https://www.ledger.com/')}
            />
            <Provider
              src={StatusLogo}
              width='auto'
              height='35px'
              alt='Status.im'
              onClick={() => openInNewTab('https://status.im/')}
            />
            <Provider
              src={PictorLogo}
              width='auto'
              height='35px'
              alt='John Lilic'
              onClick={() => openInNewTab('https://twitter.com/JohnLilic')}
            />
            <Provider
              src={YapLogo}
              width='auto'
              height='35px'
              alt='Yap Global'
              onClick={() => openInNewTab('http://www.yapglobal.com/')}
            />
            <Provider
              src={NearLogo}
              width='auto'
              height='35px'
              alt='Near Protocol'
              onClick={() => openInNewTab('https://near.org/')}
            />
          </PoweredBySilver>
          <PoweredByBronze>
            <Provider
              src={Api3Logo}
              width='auto'
              height='30px'
              alt='Api3'
              onClick={() => openInNewTab('https://api3.org/')}
            />
            <Provider
              src={EfLogo}
              width='auto'
              height='30px'
              alt='Ethereum Foundation'
              onClick={() => openInNewTab('https://ethereum.org')}
            />
            <Provider
              src={ParaswapLogo}
              width='auto'
              height='30px'
              alt='Paraswap'
              onClick={() => openInNewTab('https://paraswap.io/')}
            />
            <Provider
              src={HermezLogo}
              width='auto'
              height='30px'
              alt='Hermez'
              onClick={() => openInNewTab('https://hermez.io/')}
            />
            <Provider
              src={RaidenLogo}
              width='auto'
              height='30px'
              alt='Raiden'
              onClick={() => openInNewTab('https://raiden.network/')}
            />
            <Provider
              src={WitnetLogo}
              width='auto'
              height='30px'
              alt='Witnet'
              onClick={() => openInNewTab('https://witnet.io/')}
            />
            <Provider
              src={StakeLogo}
              width='auto'
              height='30px'
              alt='Stake DAO'
              onClick={() => openInNewTab('https://stakedao.org/')}
            />
            <Provider
              src={BosonLogo}
              width='auto'
              height='30px'
              alt='Boson Protocol'
              onClick={() => openInNewTab('https://bosonprotocol.io/')}
            />
            <Provider
              src={ChainlinkLogo}
              width='auto'
              height='30px'
              alt='Chainlink'
              onClick={() => openInNewTab('https://chain.link/')}
            />
            <Provider
              src={OneinchLogo}
              width='auto'
              height='30px'
              alt='1inch Exchange'
              onClick={() => openInNewTab('https://1inch.io/')}
            />
            <Provider
              src={CartoonbaseLogo}
              width='auto'
              height='20px'
              alt='Cartoonbase'
              onClick={() => openInNewTab('https://cartoonbase.com/')}
            />
            <Provider
              src={CeloLogo}
              width='auto'
              height='30px'
              alt='Celo'
              onClick={() => openInNewTab('https://celo.org/')}
            />
            <Provider
              src={IexecLogo}
              width='auto'
              height='30px'
              alt='Iexec'
              onClick={() => openInNewTab('https://iex.ec/')}
            />
            <Provider
              src={SwarmLogo}
              width='auto'
              height='30px'
              alt='Swarm'
              onClick={() => openInNewTab('https://ethswarm.org/')}
            />
          </PoweredByBronze>
          <PoweredByIron>
            <Provider
              src={EightyeightmphLogo}
              width='auto'
              height='30px'
              alt='88mph'
              onClick={() => openInNewTab('https://88mph.app/')}
            />
            <Provider
              src={AmazonLogo}
              width='auto'
              height='30px'
              alt='AWS'
              onClick={() => openInNewTab('https://aws.amazon.com/')}
            />
            <Provider
              src={ApwineLogo}
              width='auto'
              height='30px'
              alt='Apwine'
              onClick={() => openInNewTab('https://www.apwine.fi/')}
            />
            <Provider
              src={ArcadiaLogo}
              width='auto'
              height='30px'
              alt='Arcadia Group'
              onClick={() => openInNewTab('https://arcadiamgroup.com/')}
            />
            <Provider
              src={AudiusLogo}
              width='auto'
              height='30px'
              alt='Audius'
              onClick={() => openInNewTab('https://audius.co/')}
            />
            <Provider
              src={AurorastackLogo}
              width='auto'
              height='30px'
              alt='Aurora Stack'
              onClick={() => openInNewTab('https://aurora.dev/')}
            />
            <Provider
              src={ComethLogo}
              width='auto'
              height='30px'
              alt='Cometh'
              onClick={() => openInNewTab('https://cometh.io')}
            />
            <Provider
              src={DypLogo}
              width='auto'
              height='30px'
              alt='Dyp'
              onClick={() => openInNewTab('https://dyp.finance/')}
            />
            <Provider
              src={HoardexchangeLogo}
              width='auto'
              height='30px'
              alt='Hoard Exchange'
              onClick={() => openInNewTab('https://hoard.exchange/')}
              // style={{ backgroundColor: '#ffffff', borderRadius: '3rem' }}
            />
            <Provider
              src={HoprLogo}
              width='auto'
              height='30px'
              alt='Hopr'
              onClick={() => openInNewTab('https://hoprnet.org/')}
            />
            <Provider
              src={KaikoLogo}
              width='auto'
              height='30px'
              alt='Kaiko'
              onClick={() => openInNewTab('https://kaiko.com/')}
            />
            <Provider
              src={KlerosLogo}
              width='auto'
              height='30px'
              alt='Kleros'
              onClick={() => openInNewTab('https://kleros.io/')}
            />
            <Provider
              src={PolygonLogo}
              width='auto'
              height='30px'
              alt='Celo'
              onClick={() => openInNewTab('https://polygon.technology/')}
            />
            <Provider
              src={QuantstampLogo}
              width='auto'
              height='30px'
              alt='Quantstamp'
              onClick={() => openInNewTab('https://quantstamp.com/')}
            />
            <Provider
              src={StarkwareLogo}
              width='auto'
              height='30px'
              alt='Starkware'
              onClick={() => openInNewTab('https://starkware.co/')}
            />
            <Provider
              src={ThegraphLogo}
              width='auto'
              height='30px'
              alt='The Graph'
              onClick={() => openInNewTab('https://thegraph.com/')}
            />
          </PoweredByIron>
        </SponsorContainer>
        {/**
         <Header>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                <div style={{minHeight: "2rem"}}>
                You're in <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div style={{minHeight: "2rem"}}/>
              </Fragment>
            )}
          </SpaceInfo>
        </Header>
            */}
      </BrowserView>
      <MobileView>
        <ShowSection />
        <ImagemapContainerMobile>
          <EthturinMobile />
        </ImagemapContainerMobile>
        <PoweredByMobile>
          <Provider
            src={EthworksLogo}
            width='100px'
            height='auto'
            alt='interspace.chat'
            onClick={() => openInNewTab('https://twitter.com/ethworks')}
          />
          <Provider
            src={EthCCLogo}
            width='40px'
            height='40px'
            alt='Akash Network'
            onClick={() => openInNewTab('https://twitter.com/akashnet_')}
          />
          <Provider
            src={Api3Logo}
            width='40px'
            height='40px'
            alt='api3'
            onClick={() => openInNewTab('https://twitter.com/APi3dao')}
          />
          <Provider
            src={ParalleleLogo}
            width='40px'
            height='40px'
            alt='Parallele Polis'
            onClick={() => openInNewTab('https://twitter.com/parallelepolis/')}
          />
          <Provider
            src={GitcoinLogo}
            width='40px'
            height='40px'
            alt='Gitcoin'
            onClick={() => openInNewTab('https://gitcoin.co/')}
          />
          <Provider
            src={InterspaceLogo}
            width='40px'
            height='40px'
            alt='interspace.chat'
            onClick={() =>
              openInNewTab('https://gitcoin.co/grants/516/interspacechat')
            }
          />
          <Provider
            src={CovalentLogo}
            width='40px'
            height='40px'
            alt='covalent'
            onClick={() => openInNewTab('https://twitter.com/Covalent_HQ')}
          />
          <Provider
            src={EnsLogo}
            width='40px'
            height='40px'
            alt='ens'
            onClick={() => openInNewTab('https://twitter.com/ensdomains')}
          />
          <Provider
            src={InterlayLogo}
            width='100px'
            height='auto'
            alt='interlay'
            onClick={() => openInNewTab('https://twitter.com/InterlayHQ')}
          />
        </PoweredByMobile>
      </MobileView>
    </SpaceSelector>
  )
}

export default Space

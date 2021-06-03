import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { BrowserView, MobileView } from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import SvgImagemap from './Sovrython'
import SvgImagemapMobile from './SovrythonMobile'

import ParalleleLogo from '../img/sovrython/Parallele-logo.svg'
import GitcoinLogo from '../img/sovrython/Gitcoin-logo.svg'
import InterspaceLogo from '../img/sovrython/Interspacechat-logo.svg'
import AkashLogo from '../img/sovrython/akash-network-logo.png'
import Api3Logo from '../img/sovrython/api3-logo.png'
import InterlayLogo from '../img/sovrython/interlay-logo.png'
import CovalentLogo from '../img/sovrython/covalent-logo.svg'
import EnsLogo from '../img/sovrython/ens-logo.svg'
import EthworksLogo from '../img/sovrython/ethworks-logo.svg'

const Header = styled.span``

const PoweredBy = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 80vw;
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  margin: 0 auto;
  left: 0;
  right: 0;
  align-items: center;
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
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: opacity(0.3);
  cursor: pointer;
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
  min-height: 50vh;
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
        <ImagemapContainer>
          <SvgImagemap />
        </ImagemapContainer>
        <PoweredBy>
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
            src={AkashLogo}
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
            src={EthworksLogo}
            width='100px'
            height='auto'
            alt='interspace.chat'
            onClick={() => openInNewTab('https://twitter.com/ethworks')}
          />
          <Provider
            src={InterlayLogo}
            width='100px'
            height='auto'
            alt='interlay'
            onClick={() => openInNewTab('https://twitter.com/InterlayHQ')}
          />
        </PoweredBy>
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
          <SvgImagemapMobile />
        </ImagemapContainerMobile>
        <PoweredByMobile>
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
            src={AkashLogo}
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
            src={EthworksLogo}
            width='100px'
            height='auto'
            alt='interspace.chat'
            onClick={() => openInNewTab('https://twitter.com/ethworks')}
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

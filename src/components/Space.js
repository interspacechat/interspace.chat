import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { BrowserView, MobileView } from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import EthCCLogo from '../img/ethcc-sponsors/gold/ethcc.png'
import EthCC from './EthCC'
import EthCCMobile from './EthCCMobile'

const Header = styled.span``

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
      filter: drop-shadow(0px 0px 5px #000);
    }
  }

  h1 span {
    color: #b30602;
    font-size: 2rem;
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
  height: 80vh;
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
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  background-color: white;
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

  const ShowSectionContainer = styled.div`
    position: absolute;
    margin: auto auto;
    width: 100%;
    height: 100%;
    z-index: 300;
  `

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
    border: 1px solid ${props => props.theme.highlight};
    border-radius: 100px;
    background-color: ${props => props.theme.background};
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
    <>
      {isHidden ? null : (
        <ShowSectionContainer>
          {isHidden ? null : (
            <ButtonContainer>
              {isHidden ? null : <Element />}
              <CloseButton onClick={onClick}>
                {isHidden ? '' : 'Close this message'}
              </CloseButton>
            </ButtonContainer>
          )}
        </ShowSectionContainer>
      )}
    </>
  )
}

const Element = () => (
  <Descripton>
    <p>
      This website is optimized for <StrongStyled>desktop</StrongStyled>.{' '}
    </p>

    <p>EthCC livestream can also be accessed on:</p>
    <a href='https://www.youtube.com/channel/UCf7zF8tFOb9T58nBo09BhAw'>
      'Ethereum France' Youtube channel
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

        <EthCC style={{ paddingTop: '3rem' }} />

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
          <h3>
            EthCC<span>[4]</span> - July 20-22, 2021
          </h3>
        </SponsorContainer2>
        <ShowSection />
        <ImagemapContainerMobile>
          <EthCCMobile />
        </ImagemapContainerMobile>
      </MobileView>
    </SpaceSelector>
  )
}

export default Space

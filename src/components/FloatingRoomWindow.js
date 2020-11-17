import React, { useEffect, useContext, useReducer } from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'

import { isMobile } from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import LoftRadioInstance from './integrations/LoftRadioInstance'
import YoutubeInstance from './integrations/YoutubeInstance'
import ChatInstance from './integrations/ChatInstance'
import CreditsInstance from './integrations/CreditsInstance'
import CalendarInstance from './integrations/CalendarInstance'
import HubInstance from './integrations/HubInstance'
import RoomInstance from './integrations/RoomInstance'
import LivestreamLinkInstance from './integrations/LivestreamLinksInstance'

import AboutInstance from './external-sites/AboutInstance'
import LivepeerInstance from './integrations/LivepeerInstanceReactHLS'
import DonateInstance from './external-sites/DonateInstance'
import RaffleInstance from './external-sites/RaffleInstance'
import HelpInstance from './external-sites/HelpInstance'
import VHackathonInstance from './external-sites/VHackathonInstance'
import TvguideInstance from './external-sites/TvGuide'

import { RoomNames } from '../utils/constants'
import LaunchNewRoom from './LaunchNewRoom'

import '../styles/imagemap.css'

const width = window.innerWidth / 2
const height = window.innerHeight / 2

const SpaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .windowKey {
    font-size: 30px;
    font-weight: 400;
    color: ${props => props.theme.body};
  }
`
const SpaceHeaderElement = styled.div`
  margin: 0.5rem;
`
const SpaceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const SpaceContent = styled.div`
  width: 100%;
  flex: 1;
  cursor: auto;
  div {
    color: black;
  }
`

const spaceContainerStyle = {
  borderRadius: '12px',
  padding: '15px',
  paddingTop: '0px',
  // backdropFilter: "blur(4px)",
  cursor: 'all-scroll',
  pointerEvents: 'all',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  '&:active iframe': {
    pointerEvents: 'none'
  }
}

const Closer = styled.div`
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::before {
    content: '×'; // here is your X(cross) sign.
    color: ${props => props.theme.body};
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 30px;
  }
`

const RoomLink = styled.a`
  text-decoration: none;
  padding-left: 1rem;
`

function getFloatingRoomWindow (windowKey) {
  if (windowKey === 'loft.radio') {
    return <LoftRadioInstance />
  } else if (RoomNames.indexOf(windowKey) > -1) {
    return <RoomInstance space={windowKey} />
  } else if (windowKey === 'VHackathon Solidity Summit') {
    return <VHackathonInstance />
  } else if (windowKey === 'credits') {
    return <CreditsInstance />
  } else if (windowKey === 'teletext chat') {
    return <ChatInstance />
  } else if (windowKey === 'new room') {
    return <LaunchNewRoom />
  } else if (windowKey === 'claim poap token') {
    return <ChatInstance />
  } else if (windowKey === 'calendar') {
    return <CalendarInstance />
  } else if (windowKey === 'youtube') {
    return <YoutubeInstance />
  } else if (windowKey === 'hubs') {
    return <HubInstance />
  } else if (windowKey === 'about') {
    return <AboutInstance />
  } else if (windowKey === 'livepeer') {
    return <LivepeerInstance />
  } else if (windowKey === 'raffle') {
    return <RaffleInstance />
  } else if (windowKey === 'donate') {
    return <DonateInstance />
  } else if (windowKey === 'help') {
    return <HelpInstance />
  } else if (windowKey === 'livestream') {
    return <LivestreamLinkInstance />
  } else if (windowKey === 'tv guide') {
    return <TvguideInstance />
  } else if (windowKey === null) {
    return null
  }
}

function zIndexesReducer (state, action) {
  return {
    ...state,
    [action.key]: action.value
  }
}

function FloatingRoomWindow () {
  const { currentFloatingSpaces, closeFloatingSpace } = useContext(
    FloatingSpaceContext
  )

  const space = currentFloatingSpaces

  const [zIndexes, setZIndexes] = useReducer(zIndexesReducer, {})
  const maxZ = Object.values(zIndexes).reduce((acc, el) => Math.max(acc, el), 1)

  useEffect(() => {
    let tempMax = maxZ
    currentFloatingSpaces.forEach(space => {
      if (!zIndexes[space]) {
        setZIndexes({ key: space, value: ++tempMax })
      }
    })
  }, [currentFloatingSpaces, maxZ, zIndexes])

  function setWindowFocus (windowKey) {
    setZIndexes({ key: windowKey, value: maxZ + 1 })
  }

  const setStartingCoordinatesX = windowKey => {
    let windowOriginX = 20
    if (windowKey === 'discord chat') {
      windowOriginX = width
    } else if (windowKey === 'claim poap token') {
      windowOriginX = width / 2
    } else if (windowKey === 'calendar') {
      windowOriginX = width / 2
    } else if (windowKey === 'youtube' || windowKey === 'livepeer') {
      windowOriginX = 20
    } else if (
      windowKey === 'VHackathon Solidity Summit' ||
      windowKey === 'credits'
    ) {
      windowOriginX = width / 1.6
    } else if (
      windowKey === 'help' ||
      windowKey === 'about' ||
      windowKey === 'new room' ||
      windowKey === 'loft.radio' ||
      windowKey === 'claim poap token'
    ) {
      windowOriginX = width / 2
    } else {
      windowOriginX = 20
    }
    return windowOriginX
  }
  const setStartingCoordinatesY = windowKey => {
    let windowOriginY = 40
    if (
      windowKey === 'VHackathon Solidity Summit' ||
      windowKey === 'credits' ||
      windowKey === 'discord chat'
    ) {
      windowOriginY = 40
    } else if (windowKey === 'calendar') {
      windowOriginY = height / 2 - 70
    } else if (windowKey === 'youtube' || windowKey === 'livepeer') {
      windowOriginY = height + 10
    } else if (
      windowKey === 'help' ||
      windowKey === 'about' ||
      windowKey === 'new room' ||
      windowKey === 'livestream' ||
      windowKey === 'loft.radio' ||
      windowKey === 'claim poap token'
    ) {
      windowOriginY = height / 2 - 70
    } else {
      windowOriginY = 40
    }
    return windowOriginY
  }

  const setFloatingwindowColor = windowKey => {
    let bgColor = '#FCE96Add'

    if (windowKey === 'credits') {
      bgColor = '#EC71D8'
    } else if (windowKey === 'teletext chat') {
      bgColor = '#696FC6'
    } else if (windowKey === 'tv guide') {
      bgColor = '#63B4E5'
    } else if (
      windowKey === 'discord chat' &&
      space.indexOf('main-room') > -1
    ) {
      bgColor = '#FCE96Add'
    } else if (windowKey === 'discord chat' && space.indexOf('lobby') > -1) {
      bgColor = '#FCE96Add'
    } else if (
      windowKey === 'discord chat' &&
      space.indexOf('mentor-ring') > -1
    ) {
      bgColor = '#FCE96Add'
    } else if (
      (windowKey === 'youtube' || windowKey === 'livepeer') &&
      space.indexOf('main-room') > -1
    ) {
      bgColor = '#FCE96Add'
    } else if (
      (windowKey === 'youtube' || windowKey === 'livepeer') &&
      space.indexOf('lobby') > -1
    ) {
      bgColor = '#FCE96Add'
    } else if (
      (windowKey === 'youtube' || windowKey === 'livepeer') &&
      space.indexOf('mentor-ring') > -1
    ) {
      bgColor = '#FCE96Add'
    } else if (windowKey === 'calendar') {
      bgColor = '#5C5C5Fdd'
    } else if (windowKey === 'new room') {
      bgColor = '#5C5C5Fdd'
    } else if (windowKey === 'livestream') {
      bgColor = '#5C5C5Fdd'
    } else if (windowKey === 'claim poap token') {
      bgColor = '#ff00e1dd'
    } else {
      bgColor = '#FCE96Add'
    }
    return bgColor
  }

  const setStartingWidth = windowKey => {
    let windowWidth = width - 20
    if (windowKey === 'credits' || windowKey === 'VHackathon Solidity Summit') {
      windowWidth = width / 2
    } else {
      windowWidth = width - 20
    }
    return windowWidth
  }

  const setStartingHeight = windowKey => {
    let windowHeight = height - 20
    if (windowKey === 'credits' || windowKey === 'VHackathon Solidity Summit') {
      windowHeight = height * 1.8
    } else {
      windowHeight = height - 20
    }
    return windowHeight
  }

  return currentFloatingSpaces.map(windowKey => (
    <Rnd
      key={windowKey}
      default={{
        x: isMobile ? 10 : setStartingCoordinatesX(windowKey),
        y: isMobile ? 20 : setStartingCoordinatesY(windowKey),
        width: isMobile ? width * 1.9 : setStartingWidth(windowKey),
        height: isMobile ? height * 1.8 : setStartingHeight(windowKey)
      }}
      style={{
        ...spaceContainerStyle,
        backgroundColor: setFloatingwindowColor(windowKey),
        zIndex: zIndexes[windowKey] || 1
      }}
      onDragStart={() => setWindowFocus(windowKey)}
      cancel={'.nodrag'}
    >
      <SpaceContainer>
        <SpaceHeader>
          <SpaceHeaderElement onClick={() => closeFloatingSpace(windowKey)}>
            <Closer />
          </SpaceHeaderElement>
          <SpaceHeaderElement className='windowKey windowtitle'>
            {windowKey === 'main-room' ? (
              <span>
                {windowKey}
                <RoomLink href='https://jitsi.solidity-summit.ethereum.org/main-room'>
                  🔗
                </RoomLink>
              </span>
            ) : windowKey === 'lobby' ? (
              <span>
                {windowKey}
                <RoomLink href='https://jitsi.solidity-summit.ethereum.org/lobby'>
                  🔗
                </RoomLink>
              </span>
            ) : (
              windowKey.toUpperCase()
            )}
          </SpaceHeaderElement>
          <SpaceHeaderElement></SpaceHeaderElement>
        </SpaceHeader>
        <SpaceContent className='nodrag'>
          {getFloatingRoomWindow(windowKey)}
        </SpaceContent>
      </SpaceContainer>
    </Rnd>
  ))
}

export default FloatingRoomWindow

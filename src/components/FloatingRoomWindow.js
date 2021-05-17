import React, { useEffect, useContext, useReducer } from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import { RoomNames } from '../utils/constants'
import RoomInstance from './RoomInstance'
import TypeformInstance from './integrations/TypeformInstance'
import YoutubeInstance from './integrations/YoutubeInstance'
import ChatInstance from './integrations/ChatInstance'
import CalendarInstance from './integrations/CalendarInstance'
import CryptovoxelsInstance from './integrations/CryptovoxelsInstance'
import LoftRadioInstance from './integrations/LoftRadioInstance'
import AboutInstance from './external-sites/AboutInstance'

const width = window.innerWidth / 2
const height = window.innerHeight / 2

const SpaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SpaceHeaderElement = styled.div`
  margin: 0.1rem;
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
  height: 100%;
  flex: 1;
`

const spaceContainerStyle = {
  padding: '5px',
  paddingTop: '0px',
  borderRadius: 10,
  cursor: 'all-scroll',
  pointerEvents: 'all',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  '&:active iframe': {
    pointerEvents: 'none'
  }
}

const RoomLink = styled.a`
  text-decoration: none;
  padding-left: 1rem;
`

const Closer = styled.div`
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::before {
    content: '×'; // here is your X(cross) sign.
    color: #fff;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 30px;
  }
`

function getFloatingRoomWindow (windowKey) {
  if (windowKey === 'stage') {
    return <YoutubeInstance />
  } else if (RoomNames.indexOf(windowKey) > -1) {
    return <RoomInstance space={windowKey} />
  } else if (windowKey === 'Calendar') {
    return <CalendarInstance />
  } else if (windowKey === 'About') {
    return <AboutInstance />
  } else if (windowKey === 'Chat') {
    return <ChatInstance />
  } else if (windowKey === 'Sign Up') {
    return <TypeformInstance />
  } else if (windowKey === 'loft.radio') {
    return <LoftRadioInstance />
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
  }, [currentFloatingSpaces])

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
      windowKey === 'credits' ||
      windowKey === 'Sign Up'
    ) {
      windowOriginX = width / 4
    } else if (
      windowKey === 'help' ||
      windowKey === 'About' ||
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
      windowKey === 'About' ||
      windowKey === 'discord chat'
    ) {
      windowOriginY = 40
    } else if (windowKey === 'calendar') {
      windowOriginY = height / 2 - 70
    } else if (windowKey === 'youtube' || windowKey === 'livepeer') {
      windowOriginY = height + 10
    } else if (
      windowKey === 'help' ||
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
    let bgColor = '#dab544DD'

    if (windowKey === 'NFT' || windowKey === 'Workshops') {
      bgColor = '#000000DD'
    } else {
      bgColor = '#dab544DD'
    }
    return bgColor
  }

  const setStartingWidth = windowKey => {
    let windowWidth = width - 20
    if (windowKey === 'VHackathon Solidity Summit') {
      windowWidth = width / 1.3
    } else if (windowKey === 'Sign Up') {
      windowWidth = width * 1.5
    } else {
      windowWidth = width - 20
    }
    return windowWidth
  }

  const setStartingHeight = windowKey => {
    let windowHeight = height - 20
    if (windowKey === 'Sign Up' || windowKey === 'About') {
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
        x: setStartingCoordinatesX(windowKey),
        y: setStartingCoordinatesY(windowKey),
        width: setStartingWidth(windowKey),
        height: setStartingHeight(windowKey)
      }}
      style={{
        ...spaceContainerStyle,
        backgroundColor: setFloatingwindowColor(windowKey),
        zIndex: zIndexes[windowKey] || 1
      }}
      onDragStart={() => setWindowFocus(windowKey)}
    >
      <SpaceContainer>
        <SpaceHeader>
          <SpaceHeaderElement onClick={() => closeFloatingSpace(windowKey)}>
            <Closer />
          </SpaceHeaderElement>
          <SpaceHeaderElement style={{ color: '#000000' }}>
            {windowKey}
          </SpaceHeaderElement>
          <SpaceHeaderElement></SpaceHeaderElement>
        </SpaceHeader>
        <SpaceContent>{getFloatingRoomWindow(windowKey)}</SpaceContent>
      </SpaceContainer>
    </Rnd>
  ))
}

export default FloatingRoomWindow

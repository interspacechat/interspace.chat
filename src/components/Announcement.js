import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'
import ButtonImage from '../img/sovrython/signup-button.png'

import AnnouncementImage from '../img/sovrython/announcement.jpg'

const StyledLink = styled.a`
  color: #e340a8;
  text-align: center;
`
const ImageButton = styled.img`
  cursor: pointer;
  transform: scale(1);
  transition: 1s;

  & :hover {
    transform: scale(2);
  }
`

const Announce = () => {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const {
    currentFloatingSpaces,
    addFloatingSpace,
    closeFloatingSpace
  } = useContext(FloatingSpaceContext)

  let displayedJoinedSpaces
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(', ') +
        ', ' +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(' & ')
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(' & ')
    }
  }

  return (
    <React.Fragment>
      {isPortrait && isMobile ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'grid',
            placeContent: 'space-around'
          }}
        >
          <img src={AnnouncementImage} alt='' width='100%' height='auto' />
          <ImageButton
            src={ButtonImage}
            alt=''
            width='100%'
            height='auto'
            onClick={() => addFloatingSpace('Sign Up')}
            style={{
              width: '200px',
              height: 'auto',
              margin: '0 auto',
              cursor: 'pointer'
            }}
          />
        </div>
      ) : (
        <React.Fragment>
          <div
            style={{
              width: '100vw',
              position: 'static',
              height: '100vh',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            <img src={AnnouncementImage} alt='' width='100%' height='auto' />
            <ImageButton
              src={ButtonImage}
              alt=''
              width='100%'
              height='auto'
              onClick={() => addFloatingSpace('Sign Up')}
              style={{
                width: '250px',
                top: '70vh',
                position: 'absolute',
                height: 'auto',
                margin: '0 auto',
                left: '40vw',
                cursor: 'pointer'
              }}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Announce

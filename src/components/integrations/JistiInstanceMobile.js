import React, { useEffect, useContext } from 'react'
import { SpaceContext } from '../../contexts/SpaceContext'
import styled from 'styled-components'
import '../../App.css'

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI

const Container = styled.div``

const ContainerPlaceholder = styled.div`
  opacity: 0;
`

const JitsiContainer = styled.div`
  height: auto;
  display: grid;
  justify-self: center;
  margin: 0 auto;
  padding: 0.5rem;
`

const JitsiInstanceMobile = () => {
  const { currentSpace } = useContext(SpaceContext)
  const height = 400

  useEffect(() => {
    const domain = 'sovrython.interspace.chat/'
    const options = {
      roomName: currentSpace,
      //     width: width,
      height: height,
      parentNode: document.querySelector('#meet')
    }
    const api = new JitsiMeetExternalAPI(domain, options)

    //    api.executeCommand("displayName", user);

    return function cleanup () {
      api.dispose()
    }
  })

  return (
    <Container>
      {currentSpace === '' ? (
        <ContainerPlaceholder id='meet' />
      ) : (
        <JitsiContainer id='meet'></JitsiContainer>
      )}
    </Container>
  )
}

export default JitsiInstanceMobile

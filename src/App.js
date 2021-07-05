import React from 'react'
import styled from '@emotion/styled'
import { BrowserView } from 'react-device-detect'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Space from './components/Space'
import FloatingRoomWindow from './components/FloatingRoomWindow'
import RootContextProvider from './contexts/RootContext'
import SpaceContext from './contexts/SpaceContext'

import Header from './components/Header'
import Announcement from './components/Announcement'
import Partnerdeck from './pages/Partnerships'
import PartnersInstance from './components/integrations/PartnersInstance'
import AboutInstance from './components/external-sites/AboutInstance'
import YoutubeInstance from './components/integrations/YoutubeInstance'
import ChatInstance from './components/integrations/ChatInstance'
import CalendarInstance from './components/integrations/CalendarInstance'
import SponsorshipInstance from './components/SponsorshipInstance'

const Wrapper = styled('div')`
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.background};
  max-width: 100vw;
  min-height: 100%;

  a {
    color: ${props => props.theme.highlight};
  }
`

function App () {
  return (
    <Router>
      <Wrapper className='App'>
        <RootContextProvider>
          <SpaceContext>
            <Switch>
              <Route path='/' exact component={Space} />
              <Route path='/about' exact component={AboutInstance} />
              <Route
                path='/sponsorships'
                exact
                component={SponsorshipInstance}
              />
              <Route path='/partner-deck' component={Partnerdeck} />
              <Route path='/schedule' exact component={CalendarInstance} />
              <Route path='/chat' exact component={ChatInstance} />
              <Route path='/livestream' component={YoutubeInstance} />
            </Switch>
          </SpaceContext>
          <FloatingRoomWindow />
        </RootContextProvider>
      </Wrapper>
    </Router>
  )
}

export default App

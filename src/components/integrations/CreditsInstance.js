import React from 'react'
import styled from '@emotion/styled'

import Titanembeds from '../../img/titanembeds.png'
import Jitsilogo from '../../img/jitsi.png'

import ShareButton from '../ShareButton'

const ListWrapper = styled.div``

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: ${props => props.theme.body};
  h3 {
    color: ${props => props.theme.body};
    font-size: 1.4rem;
    font-weight: 500;
    padding-left: 1rem;
    padding-bottom: 1rem;
    @media (max-height: 900px) {
      font-size: 1 rem;
      padding-left: 0.3rem;
      padding-bottom: 0.3rem;
    }
  }
`

const LinkStyled = styled.a`
  color: ${props => props.theme.highlight};
  font-size: 18px;
  font-weight: 600;
`
const StyledListItem = styled.li`
  color: ${props => props.theme.body};
  list-style-type: none;
  padding: 1rem;
  @media (max-height: 900px) {
    padding: 0.3rem;
  }
`

const StyledListLink = styled.li`
  list-style-type: none;
  padding: 1rem;
  display: block;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 0.5rem;
  @media (max-height: 900px) {
    grid-gap: 0.3rem;
  }
`

const StyledList = styled.ul`
  padding-top: 1rem;
  margin: 1rem;
  background-color: ${props => props.theme.background};
`

function CreditsInstance () {
  return (
    <Container>
      <ListWrapper>
        <StyledList>
          <h3>Credits:</h3>
          <StyledListItem>
            Image by{' '}
            <LinkStyled
              href='https://twitter.com/_franzihei'
              target='_blank'
              rel='noopener noreferrer'
            >
              @franzihei
            </LinkStyled>{' '}
          </StyledListItem>
          <StyledListItem>
            Interface by{' '}
            <LinkStyled
              href='https://github.com/geleeroyale'
              target='_blank'
              rel='noopener noreferrer'
            >
              @geleeroyale
            </LinkStyled>{' '}
          </StyledListItem>
          <StyledListItem>
            Concept by{' '}
            <LinkStyled
              href='https://twitter.com/_franzihei'
              target='_blank'
              rel='noopener noreferrer'
            >
              @franzihei
            </LinkStyled>{' '}
          </StyledListItem>
        </StyledList>

        <StyledList>
          <h3>Tech used:</h3>
          <StyledListLink>
            <LinkStyled
              href='https://meet.jit.si'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Conferencing - JitSi Open Source
            </LinkStyled>
          </StyledListLink>
          {/**
				<StyledListLink>
					<LinkStyled
						href="https://sidecar.gitter.im/"
						target="_blank"
						rel="noopener noreferrer">
						Chat integration - Gitter Sidecar
					</LinkStyled>
				</StyledListLink>
				 */}
        </StyledList>

        <StyledList>
          <h3>Support development:</h3>
          <StyledListItem>
            Powered with{' '}
            <span role='img' aria-label='heart'>
              💝
            </span>{' '}
            by{' '}
            <LinkStyled
              href='https://github.com/interspacechat'
              target='_blank'
              rel='noopener noreferrer'
            >
              interspace.chat
            </LinkStyled>
          </StyledListItem>
          <StyledListItem>
            Donate to our interspace.chat{' '}
            <LinkStyled
              href='https://gitcoin.co/grants/516/interspacechat'
              target='_blank'
              rel='noopener noreferrer'
            >
              Gitcoin Grant
            </LinkStyled>{' '}
          </StyledListItem>
          <StyledListItem>
            or directly to{' '}
            <LinkStyled
              href='https://etherscan.io/address/support.interspacechat.eth'
              target='_blank'
              rel='noopener noreferrer'
            >
              support.interspacechat.eth
            </LinkStyled>{' '}
          </StyledListItem>
          <StyledListItem>
            Spread the word
            <ShareButton />
          </StyledListItem>
        </StyledList>
      </ListWrapper>
    </Container>
  )
}

export default CreditsInstance

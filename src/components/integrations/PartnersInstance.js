import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import AkashLogo from '../../img/sovrython/akash-network-logo.png'
import Api3Logo from '../../img/sovrython/api3-logo.png'
import InterlayLogo from '../../img/sovrython/interlay-logo.png'
import CovalentLogo from '../../img/sovrython/covalent-logo.svg'
import EnsLogo from '../../img/sovrython/ens-logo.svg'

const Container = styled.div`
  display: grid;
  background-color: #1d1d1dee;
  grid-gap: 2rem;
  grid-template-rows: repeat(5, auto);
  justify-content: center;
  padding: 5rem;
  margin: 0 auto;
`

const Card = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(5, auto);
  text-align: center;
  p {
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`
const Logo = styled.img`
  margin: 0 auto;
  padding: 0.2rem;
`

const ProjectName = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  padding: 1rem;
`

const Links = styled.div`
  display: grid;
  grid-template-rows: auto;
`
const About = styled.h2`
  font-weight: 300;
  font-size: 1.1rem;
  padding-top: 3rem;
`
const Blankspace = styled.div`
  height: 2rem;
`

const PartnersInstance = () => {
  return (
    <div
      style={{
        color: '#fff',
        width: '100%',
        height: '95%',
        position: 'relative',
        overflowY: 'scroll'
      }}
    >
      <Container>
        <Card id='Akash Network'>
          <Logo src={AkashLogo} width='auto' height='40px' alt='' />
          <ProjectName>Akash Network</ProjectName>
          <Links>
            <a
              href='https://akash.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
            <a
              href='https://discord.gg/rVm2YxMM3G'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sovrython Discord Channel
            </a>
            <a
              href='https://breakout.interspace.chat/akash-lounge'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Lounge
            </a>
            <a
              href='https://github.com/ovrclk/akash'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            <a
              href='https://twitter.com/akashnet_'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Links>
          <About>About</About>
          <div>
            <p>
              Akash Network, the world’s first decentralized and open-source
              cloud, accelerates deployment, scale, efficiency and price
              performance for high-growth industries like blockchain and machine
              learning/AI. Known as the "Airbnb for Cloud," Akash Network
              provides a fast, efficient and low-cost application deployment
              solution. Developers leveraging Akash Network can access cloud
              computing at up to three times less than the cost of centralized
              cloud providers like Amazon Web Services, Google Cloud and
              Microsoft Azure. Utilizing containerization technology, Akash
              Network leverages 85% of underutilized cloud capacity in 8.4
              million global data centers, enabling anyone to buy and sell cloud
              computing.. Akash’s Interoperable Proof of Stake Blockchain is an
              open and globally consistent shared state machine that guarantees
              sovereignty over data and runtime with a high-performance RPC
              layer with multi-language libraries and bi-directional streaming.
            </p>
            <p>
              Akash is providing an additional $100k in bounties and grants for
              Sovrython.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              “Sovryn is enabling decentralized finance (DeFi) for the most
              valuable blockchain, Bitcoin. This is a game-changer because
              Sovryn is the first smart contract platform for Bitcoin enabling
              the DeFi ecosystem, and hosting this on Akash’s decentralized and
              open-source Cloud is a big win for both teams. This partnership
              will give Sovryn an advantage over other DeFi ecosystems by
              tapping into Akash’s powerful middleware layer for developers,
              critical for a better end user experience. Sponsoring Sovryn’s
              hackathon is an important way of empowering more community members
              by funding their projects.”{' '}
            </p>
            <div style={{ textAlign: 'left' }}>
              <a
                href='https://twitter.com/gregosuri'
                target='_blank'
                rel='noopener noreferrer'
              >
                -Greg Osuri
              </a>
              , CEO, Akash Network
            </div>
          </div>
          <Blankspace />
        </Card>
        <Card id='Api3'>
          <Logo src={Api3Logo} width='auto' height='40px' alt='' />
          <ProjectName>Api3</ProjectName>
          <Links>
            <a
              href='https://www.api3.org/index'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
            <a
              href='https://discord.gg/j4xTyyekgJ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sovrython Discord Channel
            </a>
            <a
              href='https://breakout.interspace.chat/api-3-lounge'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Lounge
            </a>
            <a
              href='https://github.com/api3dao'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            <a
              href='https://gitcoin.co/api3dao'
              target='_blank'
              rel='noopener noreferrer'
            >
              Gitcoin Org
            </a>
            <a
              href='https://twitter.com/APi3dao'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Links>
          <About>About</About>
          <div>
            <p>
              API3 is a collaborative project to deliver traditional API
              services to smart contract platforms in a decentralized and
              trust-minimized way, that is governed by a DAO. At its core, API3
              brings the ability for API providers to easily run their own
              oracle nodes to provide data on-chain without an intermediary to
              any decentralized application. At the heart of this mechanism sits
              <a
                href='https://docs.api3.org/pre-alpha/airnode/design-philosophy.html'
                target='_blank'
                rel='noopener noreferrer'
              >
                Airnode
              </a>
              , an open-source oracle node that is designed to be easily
              deployed by any API provider with almost no maintenance. With
              Airnode, dApp developers can write smart contracts to interact
              with the on-chain data of API providers.
            </p>
            <p>
              API3 is providing $25k worth of bounties for submissions to
              Sovrython which integrate their open-source oracle, Airnode.
              Sovryn is matching this amount, for a total of $50k in bounties.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              "API3 is excited to participate in Sovrython. The potential for
              dapps to be created that both use external data and benefit from
              the security of Bitcoin's blockchain is incredible, and we are
              proud to play a part in unlocking it."{' '}
            </p>
            <div style={{ textAlign: 'left' }}>
              <a
                href='https://twitter.com/API3DAO'
                target='_blank'
                rel='noopener noreferrer'
              >
                -Dave Connor
              </a>
              , Business Development Lead, API3
            </div>
          </div>
          <Blankspace />
        </Card>
        <Card id='Interlay'>
          <Logo src={InterlayLogo} width='80px' height='auto' alt='' />
          <ProjectName>Interlay</ProjectName>
          <Links>
            <a
              href='https://www.interlay.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
            <a
              href='https://discord.gg/j4xTyyekgJ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sovrython Discord Channel
            </a>
            <a
              href='https://breakout.interspace.chat/interlay-lounge'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Lounge
            </a>
            <a
              href='https://github.com/interlay'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            <a
              href='https://twitter.com/InterlayHQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Links>
          <About>About</About>
          <div>
            <p>
              Interlay envisions a future where blockchains can seamlessly
              connect and interact, regardless of their design and purpose.
              Anyone should be able to use any digital currency on any
              blockchain platform without restrictions. Interlay's mission is to
              enable Bitcoin holders to easily earn passive income on their BTC
              holdings by investing into decentralized financial products on any
              blockchain - without trusting centralized services.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              “Bitcoin DeFi is still early and there is a lot of work to be done
              around UX, tooling, and user & developer onboarding. This should
              be a goal common across all Bitcoin-focused companies and is in
              line with our vision of trustless Bitcoin DeFi on any blockchain.
              Interlay is glad to support the Sovryn Hackathon with challenges /
              bounties and as a judge to further these ecosystem goals”{' '}
            </p>
            <div style={{ textAlign: 'left' }}>
              <a
                href='https://twitter.com/alexeiZamyatin'
                target='_blank'
                rel='noopener noreferrer'
              >
                -Alexei Zamyatin
              </a>
              , CEO, Interlay
            </div>
          </div>
          <Blankspace />
        </Card>
        <Card id='Covalent'>
          <Logo src={CovalentLogo} width='auto' height='40px' alt='' />
          <ProjectName>Covalent</ProjectName>
          <Links>
            <a
              href='https://www.covalenthq.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
            <a
              href='https://discord.gg/XhnhKQU9ja'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sovrython Discord Channel
            </a>
            <a
              href='https://breakout.interspace.chat/covalent-lounge'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Lounge
            </a>
            <a
              href='https://teradata.github.io/covalent/v3/#/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            <a
              href='https://twitter.com/Covalent_HQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Links>
          <About>About</About>
          <div>
            <p>
              A one stop shop for blockchain data. Developers get simple APIs
              that allow for quick integration in new or existing products. One
              unified API. One billion possibilities. Covalent provides a
              unified API bringing visibility to billions of blockchain data
              points.
            </p>
          </div>
          <Blankspace />
        </Card>
        <Card id='ens'>
          <Logo src={EnsLogo} width='auto' height='40px' alt='' />
          <ProjectName>ENS domains</ProjectName>
          <Links>
            <a
              href='https://ens.domains/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
            <a
              href='https://discord.gg/jfPN7FGgwH'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sovrython Discord Channel
            </a>
            <a
              href='https://breakout.interspace.chat/ens-lounge'
              target='_blank'
              rel='noopener noreferrer'
            >
              Video Lounge
            </a>
            <a
              href='https://github.com/ensdomains'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            <a
              href='https://twitter.com/ensdomains'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Links>
          <About>About</About>
          <div>
            <p>
              The Ethereum Name Service (ENS) is a distributed, open, and
              extensible naming system based on the Ethereum blockchain which
              enables developers to map human-readable names to machine-readable
              identifiers such as Ethereum addresses, other cryptocurrency
              addresses, content hashes, and metadata. ENS also supports
              ‘reverse resolution’, making it possible to associate metadata
              such as canonical names or interface descriptions with Ethereum
              and other chain addresses.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              “ENS is the naming standard for the whole blockchain ecosystem,
              including non-Ethereum chains. You can use one ENS name for all of
              your crypto addresses. We're happy to participate in Sovrynthon to
              encourage better cross-platform integrations in the blockchain
              industry.”{' '}
            </p>
            <div style={{ textAlign: 'left' }}>
              <a
                href='https://twitter.com/brantlymillegan'
                target='_blank'
                rel='noopener noreferrer'
              >
                -Brantly Millegan
              </a>
              , CDO, Ens Domains
            </div>
          </div>
          <Blankspace />
        </Card>
      </Container>
    </div>
  )
}

export default PartnersInstance

import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'

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
import ParalleleLogo from '../img/parallele-black.png'
import InterspaceLogo from '../img/sovrython/Interspacechat-logo.svg'

const SponsorContainer = styled.div`
  width: 100%;
  height: 100%;
  // background-color: #b30602;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  grid-template-columns: repeat(9, 1fr);
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

const Provider = styled.img`
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: saturation(0.6);
  cursor: pointer;
  padding: 0.5rem;
  :hover {
    filter: saturation(1);
    transform: scale(1.2);
  }
`

const SponsorshipInstance = () => {
  const openInNewTab = url => {
    let win = window.open(url, '_blank')
    win.focus()
  }
  return (
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
        <Provider
          src={ParalleleLogo}
          width='auto'
          height='30px'
          alt='Parallele Polis parallele.at'
          onClick={() => openInNewTab('https://twitter.com/ParallelePolis')}
        />
        <Provider
          src={InterspaceLogo}
          width='auto'
          height='30px'
          alt='interspace.chat'
          onClick={() =>
            openInNewTab('https://gitcoin.co/grants/516/interspacechat')
          }
        />
      </PoweredByIron>
    </SponsorContainer>
  )
}

export default SponsorshipInstance

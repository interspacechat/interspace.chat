import React from 'react'
import styled from "@emotion/styled";

const Headline = styled.h1`
color: #dab544DD;
font-size: 1.5rem;
padding-bottom: 2rem;
`

const Headline2 = styled.h1`
color: #dab544DD;
font-size: 1.3rem;
padding-top: 1rem;
padding-bottom: 2rem;
`

const Paragraph = styled.p`
padding-bottom: 2rem;
`

const ListSection = styled.div`
padding-bottom: 2rem;
`

function AboutInstance () {
  return (
    <div style={{backgroundColor: '#1D1D1D', color: '#fff', width: '100%', height: '95%', position: 'relative', overflowY: 'auto'}}>
      <div style={{padding: '5rem', maxWidth: '800px', margin: '0 auto'}}>
      <Headline>Sovrython ignites the crypto-ecosystem with $500k in bounties and post-hackathon grants!</Headline>
      <Paragraph style={{fontStyle: "italic"}}>Sovryn invites leading developers to explore Bitcoin-native DeFi to help build a borderless, digital financial operating system.</Paragraph>
      <Paragraph><a href="https://www.sovryn.app/" target="_blank" rel="noopener noreferrer">Sovryn</a>, the leading protocol for DeFi on Bitcoin, announces <a href="https://sovrython.sovryn.app/" target="_blank" rel="noopener noreferrer">Sovrython</a>, a virtual conference and hackathon taking place from June 4th - July 18th 2021, with $250k in 
        bounties and $250k in post-hackathon grants for promising projects. This amounts to $500k of support for developing open source DeFi software that integrates with the 
        Sovryn protocol and platform. Bounties and grants will be paid out in Sovryn’s native token, $SOV.
      </Paragraph>
      <Paragraph>
        Sovrython is an opportunity for Bitcoin enthusiasts to join others at the cutting edge of blockchain tech, working on sidechains, DeFi, Lighting Network and Layer 2 systems. It will spawn a new ecosystem of products and protocols that integrate with Sovryn, advancing Bitcoin-native DeFi. The opportunities for developers include decentralized applications like Bitcoin mining pools and P2P trading, data science such as analytics and APIs, integrations such as with the RSK Network and decentralized finance features like Bitcoin-backed stablecoins, fiat gateways and options trading.
      </Paragraph>
      <Paragraph>
        To reach the widest possible audience of participants for the hackathon, Sovryn has partnered with <a href="https://www.gitcoin.co/" target="_blank" rel="noopener noreferrer">Gitcoin</a>, a community for developers to collaborate and monetize their skills while working on open-source projects through bounties and grants, totalling $19M since  launching in 2017. In addition to the $500k in bounties and grants provided by Sovryn, Sovrython will feature additional bounties in the Gitcoin explorer, from partners in linked blockchain ecosystems. These include <a href="https://akash.network/" target="_blank" rel="noopener noreferrer">Akash Network</a>, the world’s first decentralized and open-source cloud, <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">API3</a>, a collaborative project to deliver traditional API services to smart contract platforms and the <a href="https://ens.domains/" target="_blank" rel="noopener noreferrer">Ethereum Name Service</a> (ENS), a distributed, open, and extensible naming system based on the Ethereum blockchain.
      </Paragraph>
      <Paragraph>
        Together with production partner <a href="https://twitter.com/parallelepolis/" target="_blank" rel="noopener noreferrer">Parallele Polis</a>, Sovryn has assembled a number of influential figures from the the world of blockchain technology to speak and judge at the event. These include <a href="https://twitter.com/corpetty/" target="_blank" rel="noopener noreferrer">Corey Petty</a> of The BTC Podcast / status.im; <a href="https://twitter.com/HillebrandMax/" target="_blank" rel="noopener noreferrer">Max Hillebrand</a>, Wasabi Wallet Dev; <a href="https://twitter.com/bitcred/" target="_blank" rel="noopener noreferrer">Joerg Platzer</a> Room 77 / Paralelni Polis; <a href="https://twitter.com/muneeb/" target="_blank" rel="noopener noreferrer">Muneeb</a> CEO, Stacks; <a href="https://twitter.com/gregosuri/" target="_blank" rel="noopener noreferrer">Greg Osuri</a>, CEO Akash Network; <a href="https://twitter.com/bmann/" target="_blank" rel="noopener noreferrer">Boris Mann</a> Founder, Fission Codes;  <a href="https://twitter.com/BrantlyMillegan/" target="_blank" rel="noopener noreferrer">Brantly Millegan</a> BizDev, ENS Domains; <a href="https://twitter.com/udiWertheimer/" target="_blank" rel="noopener noreferrer">Udi Wertheimer</a>, Have Fun Staying Poor; <a href="https://twitter.com/alexeiZamyatin/" target="_blank" rel="noopener noreferrer">Alexei Zamyatin</a>,  Founder & CEO, Interlay; <a href="https://twitter.com/lightcoin/" target="_blank" rel="noopener noreferrer">John Light</a>, lightco.in; <a href="https://twitter.com/danheld/" target="_blank" rel="noopener noreferrer">Dan Held</a>, Growth; <a href="https://twitter.com/AlenaSatoshi/" target="_blank" rel="noopener noreferrer"></a>Alena Satoshi of Trezor and CasaHodl; <a href="https://twitter.com/martindale/" target="_blank" rel="noopener noreferrer">Martin Dale</a>, Fabric Protocol; <a href="https://twitter.com/therealsmuggler/" target="_blank" rel="noopener noreferrer">TheRealSmuggler</a>, scritcash & anarplex.net; <a href="https://twitter.com/antoni_eth/" target="_blank" rel="noopener noreferrer">Antek Hryniewiecki</a>, ETHworks; <a href="https://twitter.com/leashless/" target="_blank" rel="noopener noreferrer">Vinay Gupta</a>, Mattereum; <a href="https://twitter.com/AnitaPosch/" target="_blank" rel="noopener noreferrer">Anita Posch</a>, Bitcoin Austria Boardmember and author of “Learning Bitcoin”; Alise Killeen, CasaHodl & Blockstream; and <a href="https://twitter.com/wheatpond/" target="_blank" rel="noopener noreferrer">Eric Meltzer</a>, Proof of Work.
      </Paragraph>
      <Headline2>What are the prize categories?</Headline2>
      <ListSection>
      <ul style={{marginLeft: '20px'}}>
        <li>Decentralization / Privacy:</li>
        <ul style={{marginLeft: '30px'}}>
          <li>Decentralized Bitcoin mining pool</li>
          <li>Decentralized p2p trading</li>
          <li>Node deployments, infrastructure</li>
          <li>Arbitrary messaging bridges</li>
          <li>Sphinxchat</li>
          <li>Shielded transactions</li>
        </ul>
        <li>Data Science</li>
        <ul style={{marginLeft: '30px'}}>
          <li>Improved chain explorers</li>
          <li>Advanced Analytics and Simulations</li>
          <li>Oracles</li>
          <li>Api's</li>
        </ul>
        <li>Integrations</li>
        <ul style={{marginLeft: '30px'}}>
          <li>Wallet integrations with RSK</li>
          <li>Lightning network</li>
          <li>Subgraph on RSK</li>
          <li>ENS/HNS applications</li>
          <li>Bridges, Bridges, Bridges</li>
          <li>Exchanges</li>
        </ul>
        <li>Finance</li>
        <ul style={{marginLeft: '30px'}}>
          <li>DeFi strategies / bots</li>
          <li>Bitcoin mining futures</li>
          <li>Bitcoin backed stablecoins</li>
          <li>Fiat gateways</li>
          <li>Options trading</li>
        </ul>
      </ul>
      </ListSection>
      <Headline2>Can I enter my project in multiple categories?</Headline2>
      <Paragraph>You have to submit your project to every category you want to be considered for, but different categories might have different conditions</Paragraph>
      <Headline2>What are the participation requirements?</Headline2>
      <ListSection>
        <ul style={{marginLeft: '30px'}}>
          <li>Participants need to be at least 18 years old by June 4th, 2021.</li>
          <li>Participants from everywhere can participate in this online event.</li>
          <li>You need to register online as a team or as an individual.</li>
          <li>Partners and their affiliates are not eligible for participation in Sovrython.</li>
        </ul>
      </ListSection>
      <Headline2>Do I need a team to participate in Sovrython?</Headline2>
      <ListSection>
        <ul style={{marginLeft: '30px'}}>
          <li>You can submit individually, or as a team.</li>
          <li>Teams should include no more than ten people.</li>
          <li>All of your team participants will need to register here</li>
        </ul>
      </ListSection>
      <Headline2>What makes a submission complete?</Headline2>
      <ListSection>
        <ul style={{marginLeft: '30px'}}>
          <li>A presentation (PDF,  Slidedeck etc) describing the project</li>
          <li>Link to a public Github repository containing the code, team members, presentations, demo and documentation</li>
          <li>Link to a video demo (YouTube only) is advisable, but not strictly required</li>
          <li>The submission must be released under a GPLv3 compatible license</li>
        </ul>
      </ListSection>
      <Headline style={{color: '#fff'}}>Projects cannot be edited after submission.</Headline>
      </div>
    </div>
  )
}

export default AboutInstance

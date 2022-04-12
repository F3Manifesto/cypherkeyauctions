import Section from '../../layout/Section';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';

const Documentation = () => {

  return (
    <Section fullWidth={false} className={classes.wrapper}>
      <Container style={{ maxWidth: 1000 }}>
        <div className={classes.headerWrapper}>
          <h1>Cypher Key Auctions</h1>
          <p className={classes.aboutText}>
           The Cypher Key Auctions are public-private interval auctions with gated cryptography challenges that combine to unlock F₃M's native governance token distribution and accessory experiences and keys within the ecosystem.
           <br></br>
           <br></br>
The Navigators of the ZK Cypherpunk Zeitgeist are integral to the work of solving each encrypted puzzle. Along the way you will score and collect essential cryptographic techniques and knowhow.
          </p>
        </div>

        <div className={classes.headerWrapper}>
          <h1>How it Works?</h1>
          <p className={classes.aboutText}>
NFTs are placed live for auction daily on Ethereum with a reserve price and associated cypher. Anyone can bid publicly on the NFT within a 24 hour period. The highest bidder receives the NFT at the end of the auction. If they also put in the work to solve the cypher they unlock the F₃M governance token bounty. To receive the governance bounty you must meet the reserve, win the auction and solve the cypher. If you don't solve the cypher you only receive the NFT. <br><\br><br><\br>
If a reserve is not met within the 24 hour period of the NFT going live then it is moved to the private auction on Polygon. Here, only F₃M governance token holders are able to bid on the piece over the 24 hour period. They must also solve the cypher in order to receive the bounty along with the content during the private auction. 
          </p>
        </div>

        <div className={classes.headerWrapper}>
          <h1>Gamified Governance Distribution</h1>
          <p className={classes.aboutText}>
          Token community coordination governed by asymmetric encrypted gates allows for more interactive and useful economic machinery to be run on a massive game-like scale. The distribution of the F₃M governance token in this way incentivises members of the ecosystem to gain and practice the most common everyday and vital dexterity and fluency necessary to decypher, use, operate and create the asymmetric encryption mechanisms and their ideographic products that power the entire modern global economy.
          </p>
        </div>

        <div className={classes.headerWrapper}>
          <h1>What happens every 15 days? </h1>
          <p className={classes.aboutText}>
            Every 15 days the NFT on public auction is automatically transferred to the DAO
            treasury to serve as cornerstones of the DAO vault.
          </p>
        </div>

        <div className={classes.headerWrapper}>
          <h1>How to Join the DAO? </h1>
          <p className={classes.aboutText}>You can read all about that <a href="https://docs.f3manifesto.xyz/token-economics/web3-patron-nfts" target= "_blank" rel="noreferrer">here.</a></p>
        </div>

        <div className={classes.headerWrapper}>
          <h1>Is this code cc0? </h1>
          <p className={classes.aboutText}>
            Yes. And it’s been forked directly from NounsDAO with a few custom tweaks added. You’re
            encouraged and welcomed to do the same before you pass it along.
          </p>
        </div>
      </Container>
    </Section>
  );
};
export default Documentation;

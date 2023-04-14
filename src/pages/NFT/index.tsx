import bg from 'assets/images/nft/top_bg_nft.svg'
import styled from 'styled-components/macro'

import InfoNFT from './InfoNFT'
import JoinCrew from './JoinCrew'
import Mint from './Mint'

export default function NFTPage() {
  return (
    <Wrapper className="container">
      <img src={bg} alt="banner" className="bannerNFT" />
      <InfoNFT />
      <Mint />
      <JoinCrew />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &.container {
    width: 1368px;
    max-width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
  }

  .bannerNFT {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;

    height: 390px;
  }

  @media screen and (max-width: 1200px) {
    .bannerNFT {
      object-position: 68% center;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 16px;
    }
  }
`

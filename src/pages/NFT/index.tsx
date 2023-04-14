/* eslint-disable import/no-unused-modules */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import styled from 'styled-components/macro'

import InfoNFT from './InfoNFT'
import JoinCrew from './JoinCrew'
import Mint from './Mint'

export default function NFTPage() {
  return (
    <Wrapper className="container">
      <img src="/top_bg_nft.svg" alt="banner" className="bannerNFT" />
      <InfoNFT />
      <Mint />
      <JoinCrew />
    </Wrapper>
  )
}

const Wrapper = styled.div``

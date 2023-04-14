import React from 'react'
import styled from 'styled-components/macro'

export default function InfoNFT() {
  return (
    <Wrapper className="total">
      <div className="top">
        <img src="/nft-image.svg" alt="nft-image" />

        <div className="right">
          <div className="label">Skeleton Crew</div>

          <div className="description">
            Lorem ipsum dolor sit amet consectetur. Amet quam amet massa tristique. Eget in.
          </div>

          <div className="docs">
            View docs
            <img src="/share.svg" alt="share" />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="child">
          <div className="label">Total NFT minted</div>
          <div className="value">890</div>
        </div>

        <div className="child">
          <div className="label">Total NFT supply</div>
          <div className="value">5,000</div>
        </div>

        <div className="child">
          <div className="label">Total volume</div>
          <div className="value">50,000 ETH</div>
        </div>

        <div className="child">
          <div className="label">Avg stake APR</div>
          <div style={{ color: '#64AB2C' }} className="value">
            500.86%
          </div>
        </div>

        <div className="child">
          <div className="label">Treasury value</div>
          <div className="value">50,000 FTM</div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .total {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .top {
    display: flex;
    gap: 24px;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right > .label {
    font-weight: 700;
    font-size: 36px;
    line-height: 140%;

    color: #ffffff;
  }

  @media screen and (max-width: 600px) {
    .right > .label {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;

      color: #ffffff;
    }

    .description {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      color: rgba(255, 255, 255, 0.6);
    }
  }

  .description {
    margin: 4px 0 12px 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .docs {
    display: flex;
    align-items: center;

    width: fit-content;

    padding: 8px 16px;
    gap: 4px;

    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 140%;

    color: #ffffff;
  }

  .bottom {
    display: flex;

    padding: 24px;

    width: 100%;

    background: #1b2b45;
    border-radius: 16px;
  }

  .child {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
  }

  @media screen and (max-width: 600px) {
    .top > img {
      width: 140px;
      height: 140px;
    }

    .description {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      color: rgba(255, 255, 255, 0.6);
    }

    .bottom {
      flex-direction: column;

      padding: 12px 16px;
      gap: 6px;
    }

    .child {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .label {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .value {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;

    color: #ffffff;
  }
`

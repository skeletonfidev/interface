import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

export default function Mint() {
  const { account, provider } = useWeb3React()

  const [unlockOpen, setUnlockOpen] = useState(false)

  useEffect(() => {
    const accountConfigure = () => {}
  }, [])

  const onAddressClicked = () => {
    setUnlockOpen(true)
  }

  const closeUnlock = () => {
    setUnlockOpen(false)
  }

  return (
    <Wrapper className="total">
      <div className="label">Mint Skeleton</div>

      <div className="description">
        Lorem ipsum dolor sit amet consectetur. Amet quam amet massa tristique. Eget in.
      </div>

      <div className="nftBox">
        <div className="left">
          <img src="/no-nft.svg" alt="no-nft" />

          <div className="current">
            <div className="child">
              <div className="title">Current Bonus</div>
              <div className="value">200 SKELETON</div>
            </div>

            <div className="child">
              <div className="title">Current Price</div>
              <div className="value">
                <img src="/tokens/ftm.svg" alt="skull" /> 100 FTM
              </div>
            </div>

            <div className="child">
              <div className="title">Current Power</div>
              <div className="value">2,000</div>
            </div>
          </div>

          <div className="next">
            <div className="child">
              <div className="title">
                Next Bonus <img src="/info.svg" alt="skull" />
              </div>
              <div className="value">180 SKELETON</div>
            </div>

            <div className="child">
              <div className="title">
                Next Price <img src="/info.svg" alt="skull" />
              </div>
              <div className="value">
                {' '}
                <img src="/tokens/ftm.svg" alt="skull" /> 150 FTM
              </div>
            </div>

            <div className="child">
              <div className="title">
                Next Power <img src="/info.svg" alt="skull" />
              </div>
              <div className="value">1,500</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="select">
            <div className="box">1</div>
            <div className="stick" />
            <div className="content">
              <div className="titleSelect">Select number of Skeleton</div>
              <div className="boxSelect">
                <div className="minus">
                  <img src="/minus.svg" alt="minus" />
                </div>
                <div className="center">
                  <div className="centerTop">1</div>
                  <div className="centerBottom">100FTM</div>
                </div>
                <div className="plus">
                  <img src="/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
          </div>

          <div className="mint">
            <div className="box">2</div>
            <div className="stick" />
            <div className="content">
              <div className="titleSelect">
                <div>Mint</div>
                <div>Avai: 100 FTM</div>
              </div>
              <div className="boxSelect">
                <div className="center">
                  <div className="centerTop">NFT to mint</div>
                  <div className="centerBottom">1</div>
                </div>
                <div className="center">
                  <div className="centerTop">Bonus</div>
                  <div className="centerBottom">200 SKELETON</div>
                </div>
                <div className="center">
                  <div className="centerTop">You will pay</div>
                  <div className="centerBottom">100 FTM</div>
                </div>
              </div>
            </div>
          </div>

          {account && account.address ? (
            <button className="btnMint">Mint</button>
          ) : (
            <button disableElevation className="btnMint" variant="contained" onClick={onAddressClicked}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .total {
    margin: 48px 0 72px 0;
  }

  .label {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;

    color: #ffffff;
  }

  .description {
    margin: 4px 0 24px 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .nftBox {
    display: flex;

    padding: 24px;
    gap: 24px;

    width: 100%;

    background: #09101c;
    border-radius: 16px;
  }

  @media screen and (max-width: 1024px) {
    .nftBox {
      padding: 12px;
      flex-direction: column;
    }
  }

  .left {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left > img {
    width: 200px;
  }

  .right {
    flex: 1;

    padding: 24px;

    height: 100%;

    background: #010815;
    border-radius: 24px;
  }

  .current {
    display: flex;

    margin: 24px 0 16px 0;

    width: 100%;
  }

  .next {
    display: flex;

    width: 100%;
  }

  .child {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    display: flex;
    align-items: center;

    gap: 6px;

    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .title > img {
    width: 12px;
  }

  .value {
    display: flex;
    align-items: center;

    gap: 9px;

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: #ffffff;
  }

  .value > img {
    width: 16px;
  }

  .titleSelect {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.7);
  }

  .select {
    position: relative;

    display: flex;
    gap: 12px;
  }

  .select > .stick {
    position: absolute;
    top: 40px;
    left: 20px;
    width: 1px;
    height: 90px;

    background: rgba(255, 255, 255, 0.1);
  }

  .mint {
    position: relative;

    display: flex;
    gap: 12px;

    margin-top: 16px;
  }

  .mint > .stick {
    position: absolute;
    top: 40px;
    left: 20px;
    width: 1px;
    height: 121px;

    background: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 600px) {
    .right {
      padding: 16px 12px !important;
    }
    .title {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      color: rgba(255, 255, 255, 0.6);
    }

    .value {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      color: #ffffff;
    }

    .select > .stick {
      top: 24px !important;
      left: 12px !important;
      height: 96px !important;
    }

    .mint > .stick {
      top: 24px !important;
      left: 12px !important;
      height: 146px !important;
    }

    .right {
      padding: 16px 12px;
    }

    .select,
    .mint {
      gap: 0;
    }

    .mint > .content > .boxSelect {
      padding: 12px 8px;
      gap: 8px;
    }

    .mint > .content > .boxSelect > .center:nth-child(2) {
      flex: 1.2;
    }

    .mint > .content > .boxSelect > .center:nth-child(3) {
      align-items: flex-end !important;
    }

    .mint > .content > .boxSelect > .center > .centerBottom {
      font-size: 12px !important;
    }

    .titleSelect {
      padding-left: 12px;
    }

    .box {
      width: 24px !important;
      height: 24px !important;
    }
    .content {
      margin-top: 0 !important;
    }
  }

  .mint > .content > .titleSelect {
    display: flex;
    justify-content: space-between;
  }

  .mint > .content > .boxSelect {
    justify-content: unset;
  }

  .mint > .content > .boxSelect > .center {
    flex: 1;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    gap: 4px;
  }

  .mint > .content > .boxSelect > .center > .centerTop {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .mint > .content > .boxSelect > .center > .centerBottom {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: #ffffff;
  }

  .content {
    margin-top: 10px;

    flex: 1;
  }

  .btnMint {
    margin-top: 20px;
    margin-left: 52px;

    cursor: pointer;

    width: calc(100% - 52px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;

    border: none;
    background: #2e75ff;
    border-radius: 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 140%;

    color: #ffffff;
  }

  .titleSelect {
    margin-bottom: 10px;
  }

  .boxSelect {
    display: flex;
    justify-content: space-between;
  }

  .minus,
  .plus {
    display: flex;
    align-items: center;
  }

  .minus,
  .plus > img {
    cursor: pointer;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .centerTop {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .centerBottom {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 100px;
  }

  .boxSelect {
    padding: 12px;
    gap: 12px;

    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
  }
`

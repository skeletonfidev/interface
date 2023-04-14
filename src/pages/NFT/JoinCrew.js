import noCheckImg from 'assets/images/nft/icon-checkbox.svg'
import checkImg from 'assets/images/nft/icon-checkbox-checked.svg'
import nftImg from 'assets/images/nft/nft-image1.svg'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
export default function JoinCrew() {
  const [choosenNFT, setChoosenNFT] = useState([])
  const listNFT = [
    {
      id: 1,
      img: nftImg,
      power: 100,
    },
    {
      id: 2,
      img: nftImg,
      power: 100,
    },
    {
      id: 3,
      img: nftImg,
      power: 100,
    },
    {
      id: 4,
      img: nftImg,
      power: 100,
    },
    {
      id: 5,
      img: nftImg,
      power: 100,
    },
    {
      id: 11,
      img: nftImg,
      power: 100,
    },
    {
      id: 21,
      img: nftImg,
      power: 100,
    },
    {
      id: 31,
      img: nftImg,
      power: 100,
    },
    {
      id: 41,
      img: nftImg,
      power: 100,
    },
    {
      id: 51,
      img: nftImg,
      power: 100,
    },
  ]

  const handleChange = (clickItem) => {
    const lists = [...choosenNFT]

    if (lists.includes(clickItem)) {
      const filterList = lists.filter((item) => {
        return item !== clickItem
      })

      setChoosenNFT(filterList)
      return
    } else {
      lists.push(clickItem)
      setChoosenNFT(lists)
    }
  }
  return (
    <Wrapper className="container">
      <div className="title">Join Crew</div>
      <div className="desc">Lorem ipsum dolor sit amet consectetur. Amet quam amet massa tristique. Eget in.</div>
      <div className="joinLayout">
        <div className="info">
          <div className="commonInfo">
            <div>
              <div className="label">Skeleton Crew APR</div>
              <div className="valueSpecial">11.98%</div>
            </div>
            <div>
              <div className="label">Total NFT staked</div>
              <div className="value">100</div>
            </div>
            <div>
              <div className="label">Total distributed</div>
              <div className="value">
                100 FTM <span className="dollarValue">$50,000</span>
              </div>
            </div>
            <div>
              <div className="label">Next distribution</div>
              <div className="value">1d : 15h : 15m : 15s</div>
            </div>
            <div>
              <div className="label">Next reward</div>
              <div className="value">
                100 FTM <span className="dollarValue">$50,000</span>
              </div>
            </div>
          </div>
          <div className="yourInfo">
            <div>
              <div className="label">Your APR</div>
              <div className="valueSpecial">11.98%</div>
            </div>
            <div>
              <div className="label">Total NFT staked</div>
              <div className="value">100</div>
            </div>
            <div>
              <div className="label">Power staked</div>
              <div className="value">5,000</div>
            </div>
            <div>
              <div className="label">Pending reward</div>
              <div className="value">
                100 FTM <span className="dollarValue">$50,000</span>
              </div>
            </div>
            <div>
              <div className="label">Next reward</div>
              <div className="value">
                100 FTM <span className="dollarValue">$50,000</span>
              </div>
            </div>
            <div className="btnWrap">
              <button className="btn-primary">Claim</button>
            </div>
          </div>
        </div>
        <div className="listNFT">
          <div className="listTitle">Your Skeleton (10)</div>
          <div className="list">
            {listNFT.map((item) => (
              <div key={item.id} className="nftItem">
                <div className="checkItem">
                  {' '}
                  <img
                    src={choosenNFT.includes(item.id) ? checkImg : noCheckImg}
                    alt="check-box"
                    onClick={() => handleChange(item.id)}
                  />{' '}
                </div>
                <div className="item">
                  <img src={item.img} alt="nft" />
                  <div>
                    <div className={item.name}>Skeleton #{item.id}</div>
                    <div className={item.power}>Power: {item.power}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="nftActions">
              <button className="btn-primary">Stake all</button>
              <button className="btn-secondary">Unstake all</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: #fff;
  &.container {
    padding-bottom: 200px;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 4px;
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 24px;
  }

  .joinLayout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .label {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 4px;
  }
  .value {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: baseline;
    color: #fff;
  }
  .valueSpecial {
    font-weight: 700;
    font-size: 36px;
    line-height: 140%;
    color: #64ab2c;
  }
  .dollarValue {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    margin-left: 8px;
  }
  .btnWrap button {
    width: 100%;
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .info > div {
    background: #09101c;
    border-radius: 16px;
    padding: 24px;
  }
  .info > div > div:not(:last-child) {
    margin-bottom: 16px;
  }

  .listNFT {
    background: #09101c;
    border-radius: 16px;
    padding: 24px;
    position: relative;
    border-radius: 16px;
  }
  .listTitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 16px;
    height: 282px;
    overflow-y: scroll;
    padding-right: 8px;
  }
  .nftItem {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 8px;
    display: flex;
    align-items: center;
    max-height: 80px;
  }
  .nftItem img {
    border-radius: 12px;
    margin-right: 8px;
    width: 64px;
    height: 64px;
  }
  .item {
    margin-left: 8px;
    display: flex;
    align-items: center;
  }
  .nftActions {
    background: #09101c;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 20px 16px;
    position: absolute;
    bottom: 0px;
    border-radius: 0 0 16px 16px;
    height: 80px;
    margin-left: -24px;
    padding: 16px 24px;
    width: 100%;
  }

  .checkItem img {
    cursor: pointer;
    width: 20px;
  }

  @media screen and (max-width: 1024px) {
    .joinLayout {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 700px) {
    .desc {
      margin-bottom: 16px;
    }
    .info,
    .list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .listNFT {
      padding: 16px;
      border-radius: 16px 16px 0 0;
    }
    .list {
      height: 335px;
    }
    .nftActions {
      margin-left: -16px;
      bottom: -80px;
      padding: 16px;
    }
  }
`

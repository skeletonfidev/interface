import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { useFiatOnRampButtonEnabled } from 'featureFlags/flags/fiatOnRampButton'
import { subhead } from 'nft/css/common.css'
import styled from 'styled-components/macro'

import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  margin-bottom: 17px;
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};
`

const TextHeader = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  margin-right: 8px;
  display: flex;
  line-height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: #ffffff;
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  const fiatOnRampButtonEnabled = useFiatOnRampButtonEnabled()

  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed style={{ gap: '8px' }}>
          <TextHeader className={subhead}>
            <Trans>Swap</Trans>
          </TextHeader>
          {/* {fiatOnRampButtonEnabled && <SwapBuyFiatButton />} */}
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}

import { Trans } from '@lingui/macro'
import { Currency, Percent, TradeType } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import Card from 'components/Card'
import { LoadingRows } from 'components/Loader/styled'
import { SUPPORTED_GAS_ESTIMATE_CHAIN_IDS } from 'constants/chains'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import { useMemo } from 'react'
import { InterfaceTrade } from 'state/routing/types'
import styled, { useTheme } from 'styled-components/macro'

import { Separator, ThemedText } from '../../theme'
import { computeRealizedPriceImpact } from '../../utils/prices'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { MouseoverTooltip } from '../Tooltip'
import FormattedPriceImpact from './FormattedPriceImpact'

const StyledCard = styled(Card)`
  padding: 0;
`

const LabelSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;

  color: rgba(255, 255, 255, 0.6);
`

const ValueSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;

  color: #ffffff;

  div {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    color: #ffffff;
  }
`

interface AdvancedSwapDetailsProps {
  trade?: InterfaceTrade<Currency, Currency, TradeType>
  allowedSlippage: Percent
  syncing?: boolean
  hideInfoTooltips?: boolean
}

function TextWithLoadingPlaceholder({
  syncing,
  width,
  children,
}: {
  syncing: boolean
  width: number
  children: JSX.Element
}) {
  return syncing ? (
    <LoadingRows>
      <div style={{ height: '15px', width: `${width}px` }} />
    </LoadingRows>
  ) : (
    children
  )
}

export function AdvancedSwapDetails({
  trade,
  allowedSlippage,
  syncing = false,
  hideInfoTooltips = false,
}: AdvancedSwapDetailsProps) {
  const theme = useTheme()
  const { chainId } = useWeb3React()
  const nativeCurrency = useNativeCurrency()

  const { expectedOutputAmount, priceImpact } = useMemo(() => {
    return {
      expectedOutputAmount: trade?.outputAmount,
      priceImpact: trade ? computeRealizedPriceImpact(trade) : undefined,
    }
  }, [trade])

  return !trade ? null : (
    <StyledCard>
      <AutoColumn gap="sm">
        <RowBetween>
          <RowFixed>
            <MouseoverTooltip
              text={
                <Trans>
                  The amount you expect to receive at the current market price. You may receive less or more if the
                  market price changes while your transaction is pending.
                </Trans>
              }
              disableHover={hideInfoTooltips}
            >
              <ThemedText.DeprecatedSubHeader color={theme.textPrimary}>
                <LabelSpan>
                  <Trans>Expected Output </Trans>
                </LabelSpan>
              </ThemedText.DeprecatedSubHeader>
            </MouseoverTooltip>
          </RowFixed>
          <TextWithLoadingPlaceholder syncing={syncing} width={65}>
            <ThemedText.DeprecatedBlack textAlign="right" fontSize={14}>
              <ValueSpan>
                {expectedOutputAmount
                  ? `${expectedOutputAmount.toSignificant(6)}  ${expectedOutputAmount.currency.symbol}`
                  : '-'}
              </ValueSpan>
            </ThemedText.DeprecatedBlack>
          </TextWithLoadingPlaceholder>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <MouseoverTooltip
              text={<Trans>The impact your trade has on the market price of this pool.</Trans>}
              disableHover={hideInfoTooltips}
            >
              <ThemedText.DeprecatedSubHeader color={theme.textPrimary}>
                <LabelSpan>
                  <Trans>Price Impact</Trans>
                </LabelSpan>
              </ThemedText.DeprecatedSubHeader>
            </MouseoverTooltip>
          </RowFixed>
          <ValueSpan>
            {/* <TextWithLoadingPlaceholder syncing={syncing} width={50}>
              <ThemedText.DeprecatedBlack textAlign="right" fontSize={14}>
                <FormattedPriceImpact priceImpact={priceImpact} />
              </ThemedText.DeprecatedBlack>
            </TextWithLoadingPlaceholder> */}

            <FormattedPriceImpact priceImpact={priceImpact} />
          </ValueSpan>
        </RowBetween>
        <Separator />
        <RowBetween>
          <RowFixed style={{ marginRight: '20px' }}>
            <MouseoverTooltip
              text={
                <Trans>
                  The minimum amount you are guaranteed to receive. If the price slips any further, your transaction
                  will revert.
                </Trans>
              }
              disableHover={hideInfoTooltips}
            >
              <ThemedText.DeprecatedSubHeader color={theme.textTertiary}>
                {trade.tradeType === TradeType.EXACT_INPUT ? (
                  <LabelSpan>
                    <Trans>Minimum received</Trans>
                  </LabelSpan>
                ) : (
                  <LabelSpan>
                    <Trans>Maximum sent</Trans>
                  </LabelSpan>
                )}{' '}
                <LabelSpan>
                  <Trans>after slippage</Trans>
                </LabelSpan>{' '}
                <LabelSpan>({allowedSlippage.toFixed(2)}%)</LabelSpan>
              </ThemedText.DeprecatedSubHeader>
            </MouseoverTooltip>
          </RowFixed>
          {/* <TextWithLoadingPlaceholder syncing={syncing} width={70}>
            <ThemedText.DeprecatedBlack textAlign="right" fontSize={14} color={theme.textTertiary}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? `${trade.minimumAmountOut(allowedSlippage).toSignificant(6)} ${trade.outputAmount.currency.symbol}`
                : `${trade.maximumAmountIn(allowedSlippage).toSignificant(6)} ${trade.inputAmount.currency.symbol}`}
            </ThemedText.DeprecatedBlack>
          </TextWithLoadingPlaceholder> */}
          <ValueSpan>
            {trade.tradeType === TradeType.EXACT_INPUT
              ? `${trade.minimumAmountOut(allowedSlippage).toSignificant(6)} ${trade.outputAmount.currency.symbol}`
              : `${trade.maximumAmountIn(allowedSlippage).toSignificant(6)} ${trade.inputAmount.currency.symbol}`}
          </ValueSpan>
        </RowBetween>
        {!trade?.gasUseEstimateUSD || !chainId || !SUPPORTED_GAS_ESTIMATE_CHAIN_IDS.includes(chainId) ? null : (
          <RowBetween>
            <MouseoverTooltip
              text={
                <Trans>
                  The fee paid to miners who process your transaction. This must be paid in {nativeCurrency.symbol}.
                </Trans>
              }
              disableHover={hideInfoTooltips}
            >
              <ThemedText.DeprecatedSubHeader color={theme.textTertiary}>
                <LabelSpan>
                  <Trans>Network Fee</Trans>
                </LabelSpan>
              </ThemedText.DeprecatedSubHeader>
            </MouseoverTooltip>
            {/* <TextWithLoadingPlaceholder syncing={syncing} width={50}>
              <ThemedText.DeprecatedBlack textAlign="right" fontSize={14} color={theme.textTertiary}>
                ~${trade.gasUseEstimateUSD.toFixed(2)}
              </ThemedText.DeprecatedBlack>
            </TextWithLoadingPlaceholder> */}
            <ValueSpan>~${trade.gasUseEstimateUSD.toFixed(2)}</ValueSpan>
          </RowBetween>
        )}
      </AutoColumn>
    </StyledCard>
  )
}

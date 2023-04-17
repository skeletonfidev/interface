import { Trans } from '@lingui/macro'
import useAutoRouterSupported from 'hooks/useAutoRouterSupported'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import { ReactComponent as StaticRouterIcon } from '../../assets/svg/static_route.svg'
import AutoRouterIcon from './AutoRouterIcon'

const StyledAutoRouterIcon = styled(AutoRouterIcon)`
  height: 16px;
  width: 16px;

  :hover {
    filter: brightness(1.3);
  }
`

const StyledStaticRouterIcon = styled(StaticRouterIcon)`
  height: 16px;
  width: 16px;

  fill: ${({ theme }) => theme.textTertiary};

  :hover {
    filter: brightness(1.3);
  }
`

const StyledAutoRouterLabel = styled(ThemedText.DeprecatedBlack)`
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 140% !important;

  color: #ffffff !important;
`

export function AutoRouterLabel() {
  const autoRouterSupported = useAutoRouterSupported()

  return autoRouterSupported ? (
    <StyledAutoRouterLabel fontSize={14}>Auto Router</StyledAutoRouterLabel>
  ) : (
    <ThemedText.DeprecatedBlack fontSize={14}>
      <Trans>Trade Route</Trans>
    </ThemedText.DeprecatedBlack>
  )
}

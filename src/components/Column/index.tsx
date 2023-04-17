import styled, { DefaultTheme } from 'styled-components/macro'

type Gap = keyof DefaultTheme['grids']

export const Column = styled.div<{
  gap?: Gap
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ gap, theme }) => gap && theme.grids[gap]};
`
export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
`

export const AutoColumn = styled.div<{
  gap?: Gap | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
  grow?: true
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap, theme }) => (gap && theme.grids[gap as Gap]) || gap};
  justify-items: ${({ justify }) => justify && justify};
  flex-grow: ${({ grow }) => grow && 1};

  .total-btn-wrapper {
    button {
      padding: 8px 16px;
      gap: 4px;

      height: 40px;

      background: #2e75ff;
      border-radius: 12px;

      font-weight: 500 !important;
      font-size: 14px !important;
      line-height: 140% !important;

      color: #ffffff !important;

      div {
        font-weight: 500 !important;
        font-size: 14px !important;
        line-height: 140% !important;

        color: #ffffff !important;
      }
    }
  }
`

export default Column

import styled, { css } from 'styled-components'
import { Input } from 'antd'
import { space, height, width, fontSize, border } from 'styled-system'

import { borderBottom, noBorder } from '../../../styles/base'

// const border = props => 
//   (props.variant==='noBorder' &&
//     css`
//       border: none !important
//     `
//   ) ||
//   (props.variant === 'borderBottom' && 
//     css`
//       border-bottom: 1px solid ${({theme}) => `${theme.colors.primary} !important`};
//     `
//   )


const BaseInput = styled(Input)`
  font: inherit;
  color: inherit;
  padding: 8px;
  margin: 0;
  min-width: 0;
  border-radius: ${ props => props.borderRadius ? props.borderRadius  : 'unset !important'};
  border-color: ${({theme}) => theme.colors.borderColor}
  font-size: 18px !important;
  background: none !important;
  ${noBorder}
  ${borderBottom}
  ${space}
  ${width}
  ${height}
  ${fontSize}
  &:focus {
    && {
      border-bottom-color: ${({theme}) => `${theme.colors.primary} !important`}
      box-shadow: none;
      background: none !important;
    }
  }
`

export default BaseInput
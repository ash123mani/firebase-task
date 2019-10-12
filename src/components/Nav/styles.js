import styled from 'styled-components'
import { Row } from 'antd'
import { border, space } from 'styled-system'

export const Conatiner = styled(Row)`
  ${border}
  border: 1px solid black;
  border-color: ${({theme}) => theme.colors.borderColor } !important;
  margin-left: 10px !important;
  margin-right: 10px !important;
  ${space} !important;
`


import styled from 'styled-components'
import { border, space } from 'styled-system'
import { Col } from 'antd'


export const Container = styled(Col)`
  background-repeat: no-repeat;
  border-color: ${({theme}) => theme.colors.borderColor } !important;
  border: 1px solid black;
  ${border}
  ${space}
`
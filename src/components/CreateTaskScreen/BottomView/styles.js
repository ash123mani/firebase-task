import styled from 'styled-components'
import { space, border } from 'styled-system'

import { Row, Col } from 'antd'
import { OmitProps } from 'antd/lib/transfer/renderListBody';


export const Wrapper = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-content: center;
`


export const RowWrapper = styled(Row)`
  margin-bottom: 50px;
`

export const ColWrapper = styled(Col)`
  padding: 12px;
  background: white;
  border: 1px solid ${({ theme}) => theme.colors.borderColor};
  /* border-radius: 5px; */
  background: #d8d8d8;
  padding: 8px;
`

export const InputWrapper = styled(Col)`
  border-bottom: 1px solid #4a544e2b;
`

export const ButtonRow = styled(Row)`
  margin-top: 50px;
`


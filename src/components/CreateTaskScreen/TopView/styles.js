import styled from 'styled-components'
import { space, border } from 'styled-system'

import { Row, Col } from 'antd'
import { OmitProps } from 'antd/lib/transfer/renderListBody';


export const RowWrapper = styled(Row)`
  ${'' /* margin: 30px 10px; */}
`

export const ColWrapper = styled(Col)`
  padding: 12px;
  background: white;
  border: 1px solid ${({ theme}) => theme.colors.borderColor};
  border-radius: 5px;
`



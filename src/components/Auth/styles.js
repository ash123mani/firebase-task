import React from 'react'
import { Col, Row } from 'antd'
import styled, { css } from 'styled-components'
import  { space, height, width, fontSize, border, color } from 'styled-system'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100vh;
  flex-wrap: wrap;
  ${'' /* background: #2a3533c9; */}
`

export const RowWrapper = styled.div`
  ${'' /* position: absolute; */}
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const HangerContainer = styled(Row)`
  justify-content: space-around !important;
`

export const HangerLines = styled(Col)`
  width: 300px !important;
  padding-top: 80px;
  border-left: 1px solid #979797;
  border-right: 1px solid #979797;
  border-radius: 3px;
`
import React from 'react'
import { Row } from 'antd'

import LeftView from './LeftView'
import RightView from './RightView'

import { Container, RowWrapper } from './styles'


const Home = () => {
  return (
    <Container>
      <RowWrapper type="flex" justify="space-around" align="middle" >
        <LeftView />
        <RightView/>
      </RowWrapper>
    </Container>
  )
}


export default Home
import React, { useState } from 'react'
import { Col, Row } from 'antd'


import Button from '../Shared/Button'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Container, RowWrapper, HangerLines, HangerContainer } from './styles'


const Auth = ({ signUp, signIn }) => {
  const [loginPage, showLoginPage] = useState(true)

  const onClick = () => {
    showLoginPage(!loginPage)
  }

  return (
    <Container>
      {/* <RowWrapper> */}
        {/* <HangerContainer type="flex" justify="center" align="middle">
           <HangerLines span={12}></HangerLines>
           <HangerLines span={12}></HangerLines>
         </HangerContainer> */}
         
        {/* <Row type="flex" justify="center" align="middle">
          <Col span={12}>
            <Button width="300px" borderRadius={3} height={40} bg="#D8D8D8" borderColor="#979797" onClick={onClick}>Register</Button>
          </Col>
          <Col span={12}>
            <Button width="300px" borderRadius={3} height={40} bg="#D8D8D8" borderColor="#979797" onClick={onClick}>SignIn </Button>
          </Col>
        </Row> */}
      {/* </RowWrapper>  */}
        
        {loginPage ? <SignIn signIn={signIn} /> : <SignUp signUp={signUp} />}
    </Container>
  )
}

export default Auth

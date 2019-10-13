import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import Button from '../../Shared/Button'

const SignedOutLinks = ({ authAction }) => {

  const onClick = (e) => {
    authAction(e.target.id)
  }

  return (
    <Row justify="end" type="flex" gutter={20}>
      <Col>
        <Link to="/">
          <Button  borderColor="#979797">Home</Button>
        </Link>
      </Col>

      <Col>
        <Link to="/about">
          <Button  borderColor="#979797">About</Button>
        </Link>
      </Col>

      <Col>
        <Link to="/login">
          <Button borderColor="#979797" id="signIn" onClick={onClick}>SignIn</Button>
        </Link>
      </Col>

      <Col>
        <Link to="/login">
          <Button borderColor="#979797" id="register" onClick={onClick}>Register</Button>
        </Link>
      </Col>
    </Row>
  )
}

export default SignedOutLinks
import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import Button from '../../Shared/Button'

const SignedOutLinks = () => {
  return (
    <Row justify="end" type="flex" gutter={20}>
      <Col>
        <Link>
          <Button  borderColor="#979797">SignIn</Button>
        </Link>
      </Col>

      <Col>
        <Link>
          <Button borderColor="#979797">Register</Button>
        </Link>
      </Col>
    </Row>
  )
}

export default SignedOutLinks
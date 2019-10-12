import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import Button from '../../Shared/Button'

const SignedInLinks = ({ signOut }) => {
  const handleClick = () => {
    signOut()
  }

  return (
    <Row justify="end" type="flex" gutter={20}>
      <Col>
        <Link to="/create">
          <Button borderColor="#979797">Board</Button>
        </Link>
      </Col>

      <Col>
        <Link to="/about">
          <Button borderColor="#979797">About</Button>
        </Link>
      </Col>

      <Col>
        {/* <Link> */}
          <Button borderColor="#979797" onClick={handleClick}>Logout</Button>
        {/* </Link> */}
      </Col>
    </Row>
  )
}

export default SignedInLinks
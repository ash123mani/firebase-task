import React from 'react'
import { Col, Row } from 'antd'

import { Conatiner } from './styles'
import Text from '../../components/Shared/Text'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Nav = ({ isLoggedIn, signOut }) => {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <Conatiner borderRadius={2} pt={3} pb={3} m={2} gutter={8} pr={3}>
      <Col span={6}>
        <Text text="Task Mask" textAlign="left" pl={6} fontSize={5} fontWeight={800}/>
      </Col>
      <Col span={18}>
        { isLoggedIn ? <SignedInLinks signOut={handleSignOut}/> : <SignedOutLinks/> }
      </Col>
    </Conatiner>
  )
}

export default Nav
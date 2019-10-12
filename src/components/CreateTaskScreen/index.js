import React from 'react'

import { Container } from './styles'
import TopView from  './TopView'
import BottomView from   './BottomView'

console.log('test')

const CreateTaskScreen = ({ createTask }) => {
  return (
    <Container>
      <TopView />
      <BottomView createTask={createTask} />
    </Container>
  )
}

export default CreateTaskScreen
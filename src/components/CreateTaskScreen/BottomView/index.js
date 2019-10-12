import React from 'react'
import { Col, Row } from 'antd'

import Text from '../../Shared/Text'
import Input from '../../Shared/Input'
import Button from '../../Shared/Button'
import HoookUtils from '../../../utils/HookUtils'
import TaskUtils from '../../../utils/TaskUtils'
import { RowWrapper, ColWrapper, Wrapper, InputWrapper, ButtonRow } from './styles'

const BottomView = ({ createTask }) => {
  const [values, handleChange] = HoookUtils.useForm()

  const doneCreatingTask = () => {
    console.log('hi', values)
    let todaysTaskCount = TaskUtils.getTaskCount()
    if(todaysTaskCount < 3) {
      createTask(values)
    } else {
      console.log('problem creating task')
    }
  }

  return (
    <Wrapper>
      <RowWrapper type="flex" justify="space-between" align="middle">
        <ColWrapper span={7}>
          <Text text="Task for the day" textAlign="left" pl={3} fontSize={3} fontWeight={600}/>
        </ColWrapper>
  
        <InputWrapper span={16} >
          <Input
            type="text" 
            name="what" 
            value={values.what || ''} 
            width="500px" 
            placeholder="I will do yoga today" 
            onChange={handleChange}
          />
        </InputWrapper>
      </RowWrapper>

      <RowWrapper type="flex" justify="space-between" align="middle">
        <ColWrapper span={7}>
          <Text text="Why this task" textAlign="left" pl={3} fontSize={3} fontWeight={600}/>
        </ColWrapper>
  
        <InputWrapper span={16} >
          <Input
            type="text" 
            name="why" 
            value={values.why || ''}
            width="500px" 
            placeholder="Health is Wealth" 
            onChange={handleChange}
          />          
        </InputWrapper>
      </RowWrapper>

      <RowWrapper type="flex" justify="space-between" align="middle">
        <ColWrapper span={7}>
          <Text text="When you will do it" textAlign="left" pl={3} fontSize={3} fontWeight={600}/>
        </ColWrapper>
  
        <InputWrapper span={16} >
          <Input
            type="text" 
            name="when" 
            value={values.when || ''}
            width="500px" 
            placeholder="Office Hours"
            onChange={handleChange}
            fontSize={5}
          />        
        </InputWrapper>
      </RowWrapper>

      <RowWrapper type="flex" justify="space-between" align="middle">
        <ColWrapper span={7}>
          <Text text="Status of Task" textAlign="left" pl={3} fontSize={3} fontWeight={600}/>
        </ColWrapper>
  
        <InputWrapper span={16} >
          <Input
            type="text" 
            name="status" 
            value={values.status || ''}
            width="500px" 
            placeholder="Partially Done"
            onChange={handleChange}
          />        
        </InputWrapper>
      </RowWrapper>

      <ButtonRow type="flex" justify="end" align="middle" gutter={20}>
        <Col>
            <Button width="200px" height={40} borderColor="#979797" onClick={doneCreatingTask}>Done</Button>
        </Col>

        <Col>
            <Button width="200px" height={40}  borderColor="#979797" >Next</Button>
        </Col>
      </ButtonRow>
    </Wrapper>
  )
}

export default BottomView
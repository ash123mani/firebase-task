import React from "react";
import { Col } from "antd";

import withMyHook from "../../HookHOC";
import Text from "../../Shared/Text";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import TaskUtils from "../../../utils/TaskUtils";
import {
  RowWrapper,
  ColWrapper,
  Wrapper,
  InputWrapper,
  ButtonRow
} from "./styles";

class BottomView extends React.Component {
  constructor() {
    super();
    // this._handleKeyPress = this._handleKeyPress.bind(this);
    this.whatRef = React.createRef();
    this.whyRef = React.createRef();
    this.whenRef = React.createRef();
  }

  doneCreatingTask = () => {
    // console.log('hi', values)
    let todaysTaskCount = TaskUtils.getTaskCount();
    if (todaysTaskCount < 3) {
      // this.props.createTask(values)
    } else {
      console.log("problem creating task");
    }
  };

  // componentDidMount() {
  //   console.log('refs are', this.refs)
  //   for(let x in this.refs) {
  //     console.log('x is', x)
  //     this.refs[x].onkeypress = (e) =>
  //       this._handleKeyPress(e, this.refs[x], x);
  //   }
  //   // this.refs.props.name.focus();
  // }

  // _handleKeyPress(e, field, name){
  //   console.log('Enter holaa')

  //   if(e.keyCode === 13) {
  //     console.log('Enter pReadsse')
  //     e.preventDefault();
  //     let next  = this.refs[name].nextSibling;
  //     if(next) {
  //       this.refs[name].nextSibling.focus()
  //     }
  //   }
  // }

  render() {
    const { values, handleChange } = this.props;

    return (
      <Wrapper>
        <RowWrapper type="flex" justify="space-between" align="middle">
          <ColWrapper span={7}>
            <Text
              text="Task for the day"
              textAlign="left"
              pl={3}
              fontSize={3}
              fontWeight={600}
            />
          </ColWrapper>

          <InputWrapper span={16}>
            <Input
              type="text"
              name="what"
              value={values.what || ""}
              placeholder="I will do yoga today"
              onChange={handleChange}
              ref={this.whatRef}
            />
          </InputWrapper>
        </RowWrapper>

        <RowWrapper type="flex" justify="space-between" align="middle">
          <ColWrapper span={7}>
            <Text
              text="Why this task"
              textAlign="left"
              pl={3}
              fontSize={3}
              fontWeight={600}
            />
          </ColWrapper>

          <InputWrapper span={16}>
            <Input
              type="text"
              name="why"
              value={values.why || ""}
              placeholder="Health is Wealth"
              onChange={handleChange}
              ref={this.whyRef}
            />
          </InputWrapper>
        </RowWrapper>

        <RowWrapper type="flex" justify="space-between" align="middle">
          <ColWrapper span={7}>
            <Text
              text="When you will do it"
              textAlign="left"
              pl={3}
              fontSize={3}
              fontWeight={600}
            />
          </ColWrapper>

          <InputWrapper span={16}>
            <Input
              type="text"
              name="when"
              value={values.when || ""}
              placeholder="Office Hours"
              onChange={handleChange}
              fontSize={5}
              ref={this.whenRef}
            />
          </InputWrapper>
        </RowWrapper>

        <ButtonRow type="flex" justify="end" align="middle" gutter={20}>
          <Col>
            <Button
              width="200px"
              height={40}
              borderColor="#979797"
              onClick={this.doneCreatingTask}
            >
              Done
            </Button>
          </Col>

          <Col>
            <Button width="200px" height={40} borderColor="#979797">
              Next
            </Button>
          </Col>
        </ButtonRow>
      </Wrapper>
    );
  }
}

export default withMyHook(BottomView);

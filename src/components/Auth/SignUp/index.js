import React, { useState } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { Wrapper, ColWrapper } from "./styles";
import HoookUtils from "../../../utils/HookUtils";

const SignUp = ({ signUp }) => {
  const handleSubmit = _ => {
    signUp(values);
  };

  const [values, handleChange] = HoookUtils.useForm();

  return (
    <Wrapper>
      <Row type="flex" justify="center" align="middle">
        <ColWrapper span={24}>
          <Input
            type="text"
            name="firstName"
            value={values.firstName || ""}
            width="500px"
            placeholder="first name"
            onChange={handleChange}
          />
        </ColWrapper>

        <ColWrapper span={24}>
          <Input
            type="text"
            name="lastName"
            value={values.lastName || ""}
            width="500px"
            placeholder="last name"
            onChange={handleChange}
          />
        </ColWrapper>

        <ColWrapper span={24}>
          <Input
            type="text"
            name="email"
            value={values.email || ""}
            width="500px"
            placeholder="email address"
            onChange={handleChange}
          />
        </ColWrapper>

        <ColWrapper span={24}>
          <Input
            type="password"
            name="password"
            value={values.password || ""}
            width="500px"
            placeholder="password  ( minimum 6 characters )"
            onChange={handleChange}
          />
        </ColWrapper>

        <ColWrapper span={24}>
          <Button
            borderRadius={3}
            height={40}
            bg="#D8D8D8"
            borderColor="#979797"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </ColWrapper>
      </Row>
    </Wrapper>
  );
};

export default SignUp;

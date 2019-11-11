import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Container } from "./styles";

const Auth = ({ signUp, signIn, isLoggedIn, authAction, ...props }) => {
  let { from } = props.location.state || { from: { pathname: "/" } };

  if (isLoggedIn) {
    return <Redirect to={from} />;
  }

  return (
    <Container>
      {authAction === "signIn" ? (
        <SignIn signIn={signIn} />
      ) : (
        <SignUp signUp={signUp} />
      )}
    </Container>
  );
};

export default Auth;

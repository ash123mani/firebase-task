import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import Text from "../../Shared/Text";
import Button from "../../Shared/Button";

const LeftView = () => {
  return (
    <Container span={10} borderRadius={2} pb={2} pt={1}>
      <Text
        text="Your day is important, so plan your time in best way. It can make a difference"
        fontSize={8}
        textAlign="left"
        p={3}
        mb={2}
        fontWeight={500}
      />
      <Text
        text="Minding your own buisness is the greatest buisness. Mind your iwn buisness and see yourself growing everyday."
        fontSize={4}
        textAlign="left"
        fontWeight={400}
        p={3}
        mb={2}
      />
      <Link to="/create">
        <Button
          m={2}
          width="90%"
          float="left"
          height="45px"
          fontWeight={500}
          fontSize={3}
          borderColor="#979797"
        >
          Create Your Task
        </Button>
      </Link>
    </Container>
  );
};

export default LeftView;

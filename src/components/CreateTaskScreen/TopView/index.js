import React from "react";

import Text from "../../Shared/Text";
import { RowWrapper, ColWrapper } from "./styles";

const TopView = () => {
  return (
    <RowWrapper type="flex" justify="space-between" align="middle">
      <ColWrapper span={7}>
        <Text
          text="Wednesday 11 September 2019"
          textAlign="left"
          pl={3}
          fontSize={3}
        />
      </ColWrapper>
      <ColWrapper span={16}>
        <Text
          text="Write your own driving lines for your day"
          textAlign="left"
          pl={3}
          fontSize={3}
        />
      </ColWrapper>
    </RowWrapper>
  );
};

export default TopView;

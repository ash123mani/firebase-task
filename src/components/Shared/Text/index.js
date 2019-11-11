import React from "react";

import { BaseText } from "./styles";

const Text = ({ text, ...props }) => {
  return <BaseText {...props}>{text}</BaseText>;
};

export default Text;

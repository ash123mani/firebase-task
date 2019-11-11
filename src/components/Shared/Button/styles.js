import styled from "styled-components";
import { Button } from "antd";

import {
  space,
  height,
  fontSize,
  border,
  color,
  typography
} from "styled-system";

export const BaseButton = styled(Button)`
  && {
    font: inherit;
    padding: 10px;
    line-height: 10px;
    margin: 0px;
    width: ${props => (props.width ? props.width : "100%")};
    background-color: ${({ theme }) => theme.colors.normal} !important;
    box-shadow: 2px 6px 6px 0 #00000;
    float: ${props => props.float || "none"};
    border-radius: unset !important;
    ${fontSize}
    ${height}
    ${color}
    ${border}
    ${space}
    ${typography}
  }

  &:hover {
    && {
      color: white !important;
      background-color: ${({ theme }) => theme.colors.primary} !important;
      transition: all linear 0.3s;
      box-shadow: 2px 6px 6px 0 #00000;
    }
  }
`;

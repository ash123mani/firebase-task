import styled from "styled-components";
import { border } from "styled-system";
import { Col } from "antd";

export const Container = styled(Col)`
  ${"" /* height: 100vh;
  width: 100vw; */}
  ${"" /* background-color: ${({theme}) => theme.colors.normal } !important; */}
  background-repeat: no-repeat;
  ${border}
`;

import styled from "styled-components";

import { Row, Col } from "antd";

export const RowWrapper = styled(Row)`
  ${"" /* margin: 30px 10px; */}
`;

export const ColWrapper = styled(Col)`
  padding: 12px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
`;

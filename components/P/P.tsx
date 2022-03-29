import styled from "styled-components/native";

interface Props {
  center?: boolean;
}

const P = styled.Text<Props>`
  font-size: 18px;
  color: black;
  text-align: ${({ center }) => (center ? "center" : "auto")};
`;
export default P;

import styled from "styled-components/native";
interface Props {
  center?: boolean;
}

const Title = styled.Text<Props>`
  font-size: 22px;
  text-align: ${({ center }) => (center ? "center" : "auto")};
`;
export default Title;

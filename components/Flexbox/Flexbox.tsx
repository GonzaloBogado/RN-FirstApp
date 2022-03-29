import styled from "styled-components/native";
interface Props {
  justify?: string;
  alignItems?: string;
}

const Flexbox = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;

export default Flexbox;

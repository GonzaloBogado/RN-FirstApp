import styled from "styled-components/native";

interface Props {
  primary?: true;
  width?: string;
}

const StyledButton = styled.Pressable<Props>`
  padding: 8px;
  background-color: ${({ primary }) => (primary ? "#FAEEE0" : "#F9CF93")};
  border-radius: 8px;
  width: ${({ width }) => width || "auto"};
`;

export default StyledButton;

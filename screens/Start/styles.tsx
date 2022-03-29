import styled from "styled-components/native";
import Title from "../../components/Title/Title";
import P from "../../components/P/P";

const StyledStart = styled.View``;

export const TitleStart = styled(Title)`
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  border: 3px solid;
  border-radius: 10px;
`;
export const StartInput = styled.View`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9e4c8;
  ${P} {
    margin-bottom: 20px;
  }
`;

export default StyledStart;

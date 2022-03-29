import styled from "styled-components/native";
import P from "../../components/P/P";
import Flexbox from "../../components/Flexbox/Flexbox";

export const NumberGuess = styled.View`
  padding: 20px 30px;
  border: 3px solid #f9cf93;
  border-radius: 10px;
  margin-bottom: 20px; ;
`;
export const ButtonsPlusMinus = styled(Flexbox)`
  margin: 20px 0;
`;
export const OpponentGuesses = styled.View`
  margin: 20px 0;
`;
export const Guess = styled(Flexbox)`
  margin: 5px 0;
  background-color: #f9cf93;
  border: 3px solid black;
  border-radius: 30px;
  padding: 8px 15px;
`;

const StyledGame = styled.View`
  ${Flexbox} {
    margin: 20px 0;
  }
`;

export default StyledGame;

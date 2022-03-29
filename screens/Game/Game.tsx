import { View, Text, Alert } from "react-native";
import { TitleStart, StartInput } from "../Start/styles";
import StyledGame, {
  NumberGuess,
  ButtonsPlusMinus,
  OpponentGuesses,
  Guess,
} from "./styles";
import P from "../../components/P/P";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useState } from "react";

type Props = {
  gameNumber: number;
};

const Game = ({ gameNumber }: Props) => {
  const [guesses, setGuesses] = useState([Math.floor(Math.random() * 100) + 1]);
  const [maxValue, setMaxValue] = useState(100);
  const [minValue, setMinValue] = useState(1);
  const giveHint = (command: "+" | "-") => {
    const lastGuess = guesses[guesses.length - 1];
    if (
      (command === "+" && lastGuess > gameNumber) ||
      (command === "-" && lastGuess < gameNumber)
    ) {
      Alert.alert("You filthy liar!");
      return;
    }
    let max = maxValue;
    let min = minValue;
    if (command === "+") {
      max = maxValue;
      min = lastGuess;
    } else if (command === "-") {
      max = lastGuess;
      min = minValue;
    }
    let guess = lastGuess;
    while (guesses.some((option) => option === guess)) {
      guess = Math.floor(Math.random() * (max - min + 1) + min);
    }
    command === "+" ? setMinValue(lastGuess) : setMaxValue(lastGuess);
    setGuesses([...guesses, guess]);
  };

  return (
    <StyledGame>
      <TitleStart>Opponent's Guess</TitleStart>
      <NumberGuess>
        <Title center>{guesses[guesses.length - 1]}</Title>
      </NumberGuess>
      <StartInput>
        <P center>Higher or lower?</P>
        <ButtonsPlusMinus justify="space-around">
          <Button width="80px" onPress={() => giveHint("-")}>
            <P center>-</P>
          </Button>
          <Button width="80px" onPress={() => giveHint("+")}>
            <P center>+</P>
          </Button>
        </ButtonsPlusMinus>
      </StartInput>
      <OpponentGuesses>
        {guesses.map((guess, index) => (
          <Guess justify="space-between">
            <P>#{index + 1}</P>
            <P>Opponent's Guess: {guess}</P>
          </Guess>
        ))}
      </OpponentGuesses>
    </StyledGame>
  );
};

export default Game;

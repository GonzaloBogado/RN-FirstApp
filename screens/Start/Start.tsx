import { View, Text, Alert } from "react-native";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import NumberInput from "../../components/NumberInput/NumberInput";
import Flexbox from "../../components/Flexbox/Flexbox";
import P from "../../components/P/P";
import StyledStart, { TitleStart, StartInput } from "./styles";
import { useState } from "react";

type Props = {
  startGame: (number: number) => void;
};

const Start = ({ startGame }: Props) => {
  const [number, setNumber] = useState<number>();

  const handleChange = (input: string) => {
    setNumber(isNaN(+input) || input === "" ? undefined : parseInt(input));
  };
  const handleStart = () => {
    number !== undefined && number >= 1
      ? startGame(number)
      : Alert.alert("Please choose a valid number from 1 to 100!");
  };

  return (
    <StyledStart>
      <TitleStart>Guess My Number</TitleStart>
      <StartInput>
        <P center>Enter a Number</P>
        <NumberInput
          keyboardType="numeric"
          maxLength={2}
          value={number?.toFixed(0) || ""}
          onChangeText={handleChange}
          autoCorrect={false}
        />
        <Flexbox justify="space-around">
          <Button width="120px" onPress={() => setNumber(undefined)}>
            <P center>Reset</P>
          </Button>
          <Button width="120px" onPress={handleStart}>
            <P center>Confirm</P>
          </Button>
        </Flexbox>
      </StartInput>
    </StyledStart>
  );
};

export default Start;

import { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import Start from "./screens/Start/Start";
import Game from "./screens/Game/Game";
import StyledApp from "./styledApp";

export default function App() {
  const [gameNumber, setGameNumber] = useState<number>();

  const startGame = (number: number) => {
    setGameNumber(number);
    Alert.alert("Game will start!");
  };

  const screen = gameNumber ? (
    <Game gameNumber={gameNumber} />
  ) : (
    <Start startGame={startGame} />
  );
  return (
    <StyledApp>
      <ImageBackground
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2-Dice-Icon.svg/2048px-2-Dice-Icon.svg.png",
        }}
        style={{
          flex: 1,
        }}
        imageStyle={{
          opacity: 0.08,
        }}
      >
        {screen}
      </ImageBackground>
    </StyledApp>
  );
}

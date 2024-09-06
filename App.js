import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    luxurious: require("./assets/fonts/LuxuriousRoman-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function gameOverHandler(roundNumber) {
    setGameIsOver(true);
    setGuessRounds(roundNumber);
  }
  const pickNumber = (choseNumber) => {
    setUserNumber(choseNumber);
    setGameIsOver(false);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen pickNumber={pickNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        chosenNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <LinearGradient colors={["#F5E9E0", "#2C5C4F"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.rootScreen}
          resizeMode="cover"
          imageStyle={styles.bgImg}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#F5E9E0",
  },
  bgImg: {
    opacity: 0.15,
  },
});

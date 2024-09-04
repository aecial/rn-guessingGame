import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  function gameOverHandler() {
    setGameIsOver(true);
  }
  const pickNumber = (choseNumber) => {
    setUserNumber(choseNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen pickNumber={pickNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
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

import { useEffect, useCallback } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent auto-hide splash screen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    luxurious: require("./assets/fonts/LuxuriousRoman-Regular.ttf"),
  });

  // Hide the splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Avoid returning anything until splash screen is hidden
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
      <StatusBar style="dark" />
      <LinearGradient colors={["#F5E9E0", "#2C5C4F"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.rootScreen}
          resizeMode="cover"
          imageStyle={styles.bgImg}
          onLayout={onLayoutRootView}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImg: {
    opacity: 0.15,
  },
});

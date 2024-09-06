import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import GameButton from "../components/GameButton";
import Colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
const GameScreen = ({ chosenNumber, onGameOver }) => {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = getRandomNumber(1, 100, chosenNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  useEffect(() => {
    if (guessedNumber === chosenNumber) {
      onGameOver();
    }
  }, [guessedNumber, onGameOver, chosenNumber]);

  function getRandomNumber(min, max, exclude) {
    const rand = Math.floor(Math.random() * (max - min)) + min;

    if (rand === exclude) {
      return getRandomNumber(min, max, exclude);
    } else {
      return rand;
    }
  }
  function NextHandler(direction) {
    if (
      (direction === "lower" && guessedNumber < chosenNumber) ||
      (direction === "greater" && guessedNumber > chosenNumber)
    ) {
      Alert.alert("Liar", "You know that is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRand = getRandomNumber(minBoundary, maxBoundary, guessedNumber);
    setGuessedNumber(newRand);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.funcContainer}>
        <Text style={styles.innerText}>Computer's Guess</Text>
        <Text style={styles.guessText}>{guessedNumber}</Text>
        <Text style={styles.innerText}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <GameButton
            title={<Ionicons name="remove" size={24} color={Colors.primary} />}
            onPress={NextHandler.bind(this, "lower")}
          />
          <GameButton
            title={<Ionicons name="add" size={24} color={Colors.primary} />}
            onPress={NextHandler.bind(this, "greater")}
          />
        </View>
      </View>
      <View>
        <Text style={[styles.innerText, styles.whiteOutline]}>Log Rounds</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 44,
    gap: 40,
    marginTop: 100,
  },
  funcContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 16,
    backgroundColor: Colors.primary,
    gap: 16,
    borderRadius: 16,
    elevation: 4, // Android Only
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerText: {
    fontFamily: "luxurious",
    textAlign: "center",
    fontSize: 24,
    color: Colors.neutral,
  },
  guessText: {
    textAlign: "center",
    fontSize: 32,
    color: Colors.neutral,
    borderWidth: 1,
    borderColor: Colors.neutral,
  },
  whiteOutline: {
    borderWidth: 1,
    borderColor: Colors.neutral,
    padding: 8,
  },
});
export default GameScreen;

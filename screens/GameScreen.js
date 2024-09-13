import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import GameButton from "../components/GameButton";
import Colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoundLogs from "../components/RoundLogs";

const GameScreen = ({ chosenNumber, onGameOver }) => {
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);
  const [guessedNumber, setGuessedNumber] = useState(
    getRandomNumber(1, 100, chosenNumber)
  );
  const [guessRounds, setGuessRounds] = useState([guessedNumber]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (guessedNumber === chosenNumber) {
      onGameOver(guessRounds.length);
    }
  }, [guessedNumber, onGameOver, chosenNumber, guessRounds]);

  function getRandomNumber(min, max, exclude) {
    const range = max - min;
    if (range <= 1) {
      return min; // Avoid infinite recursion
    }
    let rand;
    do {
      rand = Math.floor(Math.random() * range) + min;
    } while (rand === exclude);
    return rand;
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
      setMaxBoundary(guessedNumber);
    } else {
      setMinBoundary(guessedNumber + 1);
    }

    const newRand = getRandomNumber(minBoundary, maxBoundary, guessedNumber);
    setGuessedNumber(newRand);
    setGuessRounds((prev) => [newRand, ...prev]);
  }
  let content = (
    <>
      <View style={styles.funcContainer}>
        <Text style={styles.innerText}>Computer's Guess</Text>
        <Text style={styles.guessText}>{guessedNumber}</Text>
        <Text style={styles.innerText}>Lower or Higher?</Text>
        <View style={styles.buttonContainer}>
          <GameButton
            title={<Ionicons name="remove" size={24} color={Colors.primary} />}
            onPress={() => NextHandler("lower")}
          />
          <GameButton
            title={<Ionicons name="add" size={24} color={Colors.primary} />}
            onPress={() => NextHandler("greater")}
          />
        </View>
      </View>
      <View style={styles.logContainer}>
        <Text style={[styles.innerText, styles.whiteOutline]}>Log Rounds</Text>
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => <RoundLogs item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.funcContainer}>
          <Text style={styles.innerText}>Computer's Guess</Text>

          <Text style={styles.innerText}>Lower or Higher?</Text>
          <View style={styles.buttonContainer}>
            <GameButton
              title={
                <Ionicons name="remove" size={24} color={Colors.primary} />
              }
              onPress={() => NextHandler("lower")}
            />
            <Text style={styles.guessText}>{guessedNumber}</Text>
            <GameButton
              title={<Ionicons name="add" size={24} color={Colors.primary} />}
              onPress={() => NextHandler("greater")}
            />
          </View>
        </View>
        <View style={styles.logContainer}>
          <Text style={[styles.innerText, styles.whiteOutline]}>
            Log Rounds
          </Text>
          <FlatList
            data={guessRounds}
            renderItem={({ item }) => <RoundLogs item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    );
  }
  return <View style={styles.screen}>{content}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // Ensure the screen takes up the full height of the device
    alignItems: "center",
    padding: 44,
    gap: 40,
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
    marginBottom: 8,
  },
  logContainer: {
    flex: 1, // Allow the FlatList to take available space
    width: "100%",
    marginTop: 16, // Add some margin to separate from the buttons
  },
});

export default GameScreen;

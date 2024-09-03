import { View, Text, StyleSheet } from "react-native";

import GameButton from "../components/GameButton";
import Colors from "../constants/colors";
const GameScreen = ({ chosenNumber }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.funcContainer}>
        <Text style={styles.innerText}>Computer's Guess</Text>
        <Text style={styles.guessText}>{chosenNumber}</Text>
        <Text style={styles.innerText}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <GameButton title={"-"} />
          <GameButton title={"+"} />
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

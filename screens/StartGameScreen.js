import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import InputDiv from "../components/InputDiv";
import Colors from "../constants/colors";
const StartGameScreen = ({ pickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const inputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetHandler = () => {
    setEnteredNumber("");
  };
  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Input", "Number has to be from 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    pickNumber(chosenNumber);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Guess My Number</Text>
      <InputDiv
        enteredNumber={enteredNumber}
        inputHandler={inputHandler}
        resetHandler={resetHandler}
        confirmHandler={confirmHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    padding: 56,
    gap: 40,
    marginTop: 100,
  },
  titleText: {
    color: Colors.primary,
    padding: 8,
    borderColor: Colors.primary,
    borderWidth: 1,
    fontSize: 26,
    fontWeight: "bold",
  },
});
export default StartGameScreen;

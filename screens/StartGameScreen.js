import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import InputDiv from "../components/InputDiv";
import Colors from "../constants/colors";
const StartGameScreen = ({ pickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
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
  const marginDistanceTop = height < 400 ? 30 : 100;
  const paddingContainer = height < 400 ? 20 : 56;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[
            styles.container,
            { marginTop: marginDistanceTop, padding: paddingContainer },
          ]}
        >
          <Text style={styles.titleText}>Guess My Number</Text>
          <InputDiv
            enteredNumber={enteredNumber}
            inputHandler={inputHandler}
            resetHandler={resetHandler}
            confirmHandler={confirmHandler}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    gap: 40,
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

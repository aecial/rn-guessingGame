import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import InputDiv from "../components/InputDiv";
const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Guess My Number</Text>
      <InputDiv />
      <StatusBar style="auto" />
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
    color: "#2C5C4F",
    padding: 8,
    borderColor: "#2C5C4F",
    borderWidth: 1,
    fontSize: 26,
    fontWeight: "bold",
  },
});
export default StartGameScreen;

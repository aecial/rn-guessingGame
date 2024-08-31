import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import InputDiv from "./components/InputDiv";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Guess My Number</Text>
      <InputDiv />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    // justifyContent: 'center',
    padding: 56,
    gap: 40,
  },
  titleText: {
    color: "white",
    padding: 8,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    height: 64,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: "white",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 0,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  funcContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "red",
    gap: 16,
    borderRadius: 16,
  },
  innerText: {
    textAlign: "center",
    fontSize: 24,
  },
});

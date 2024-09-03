import { StyleSheet, Text, View, TextInput } from "react-native";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Colors from "../constants/colors";
const InputDiv = ({
  enteredNumber,
  inputHandler,
  resetHandler,
  confirmHandler,
}) => {
  return (
    <View style={styles.funcContainer}>
      <Text style={styles.innerText}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        onChangeText={inputHandler}
        keyboardType="numeric"
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <Button2 title={"Reset"} onPress={resetHandler} />
        <Button1 title={"Confirm"} onPress={confirmHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 64,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: Colors.neutral,
    color: Colors.neutral,
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
    backgroundColor: Colors.primary,
    gap: 16,
    borderRadius: 16,
    elevation: 4, // Android Only
  },
  innerText: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.neutral,
  },
});
export default InputDiv;

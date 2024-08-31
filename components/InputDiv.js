import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button1 from "./Button1";
const InputDiv = () => {
  //   const [luckyNumber, setLuckyNumber] = useState(23);
  return (
    <View style={styles.funcContainer}>
      <Text style={styles.innerText}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        keyboardType="numeric"
        // value={luckyNumber}
      />
      <View style={styles.buttonContainer}>
        <Button1 title={"Reset"} />
        <Button1 title={"Confirm"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default InputDiv;

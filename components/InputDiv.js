import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button1 from "./Button1";
import Button2 from "./Button2";
const InputDiv = () => {
  //   const [luckyNumber, setLuckyNumber] = useState(23);
  return (
    <View style={styles.funcContainer}>
      <Text style={styles.innerText}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        // onChangeText={onChangeNumber}
        keyboardType="numeric"
        // value={luckyNumber}
      />
      <View style={styles.buttonContainer}>
        <Button2 title={"Reset"} />
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
    color: "white",
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
    backgroundColor: "#2C5C4F",
    gap: 16,
    borderRadius: 16,
    elevation: 4, // Android Only
  },
  innerText: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
});
export default InputDiv;

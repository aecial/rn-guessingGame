import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
const Button1 = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button1} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button1: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    padding: 8,
    color: "white",
  },
});
export default Button1;

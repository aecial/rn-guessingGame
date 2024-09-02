import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
const Button1 = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button1, styles.pressed] : styles.button1
      }
      onPress={onPress}
      android_ripple={{ color: "#2C5C4F" }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#F5E9E0",
    padding: 8,
    borderRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    padding: 8,
    color: "#2C5C4F",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default Button1;

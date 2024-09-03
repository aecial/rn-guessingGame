import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors";
const GameButton = ({ onPress, title }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button1, styles.pressed] : styles.button1
      }
      onPress={onPress}
      android_ripple={{ color: Colors.primary }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button1: {
    backgroundColor: Colors.neutral,
    padding: 8,
    borderRadius: 8,
    elevation: 8,
    width: "40%",
  },
  buttonText: {
    fontSize: 32,
    padding: 2,
    color: Colors.primary,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default GameButton;

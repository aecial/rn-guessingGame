import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors";
const Button1 = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button1, styles.pressed] : styles.button1
      }
      onPress={onPress}
      android_ripple={{ color: Colors.secondary }}
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
  },
  buttonText: {
    fontSize: 16,
    padding: 8,
    color: Colors.primary,
  },
  pressed: {
    opacity: 0.75,
  },
});
export default Button1;

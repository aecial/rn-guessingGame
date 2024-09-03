import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors";
const Button2 = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button2, styles.pressed] : styles.button2
      }
      onPress={onPress}
      android_ripple={{ color: Colors.neutral }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button2: {
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral,
  },
  buttonText: {
    fontSize: 16,
    padding: 8,
    color: Colors.neutral,
  },
  pressed: {
    opacity: 0.75,
  },
});
export default Button2;

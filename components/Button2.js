import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
const Button2 = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button2, styles.pressed] : styles.button2
      }
      onPress={onPress}
      android_ripple={{ color: "#F5E9E0" }}
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
    borderColor: "#F5E9E0",
  },
  buttonText: {
    fontSize: 16,
    padding: 8,
    color: "#F5E9E0",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default Button2;

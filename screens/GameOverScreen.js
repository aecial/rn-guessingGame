import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={[styles.innerText, styles.borderPrimary]}>Game Over!</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.MedText}>Your phone blah blah blah</Text>
    </View>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 44,
    gap: 40,
    marginTop: 100,
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
    fontFamily: "luxurious",
    textAlign: "center",
    fontSize: 48,
    color: Colors.primary,
  },
  borderPrimary: {
    borderWidth: 2,
    borderColor: Colors.primary,

    padding: 8,
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  MedText: {
    fontSize: 24,
  },
});

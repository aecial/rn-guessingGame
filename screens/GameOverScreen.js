import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import Button1 from "../components/Button1";
const GameOverScreen = ({ roundsNumber, chosenNumber, onStartNewGame }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Text style={[styles.innerText, styles.borderPrimary]}>Game Over!</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.jpg")}
          />
        </View>
        <Text style={styles.MedText}>
          Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess <Text style={styles.highlight}>{chosenNumber}</Text>
        </Text>
        <Button1 title={"Start New Game"} onPress={onStartNewGame} />
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 32,
    gap: deviceWidth < 360 ? 30 : 40,
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
    width: deviceWidth < 380 ? 180 : 250,
    height: deviceWidth < 380 ? 180 : 250,
    borderRadius: deviceWidth < 380 ? 90 : 125,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  MedText: {
    fontSize: 18,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.neutral,
  },
});

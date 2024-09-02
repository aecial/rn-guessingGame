import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <>
      <LinearGradient colors={["#F5E9E0", "#2C5C4F"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.rootScreen}
          resizeMode="cover"
          imageStyle={styles.bgImg}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#F5E9E0",
  },
  bgImg: {
    opacity: 0.15,
  },
});

import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
const RoundLogs = ({ item }) => {
  return (
    <View style={styles.roundCont}>
      <Text style={styles.logText}>{item}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  roundCont: {
    backgroundColor: Colors.primary,
    marginBottom: 4,
    borderRadius: 8,
    padding: 4,
  },
  logText: {
    fontSize: 16,
    color: Colors.neutral,
    textAlign: "center",
    marginVertical: 4,
  },
});
export default RoundLogs;

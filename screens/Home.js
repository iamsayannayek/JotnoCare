import { View, Text, StyleSheet } from "react-native";
import Greetings from "../components/Home/Greetings";
import SymptomsQuery from "../components/Home/SymptomsQuery";

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      {/* Greetings */}
      <View>
        <Greetings />
      </View>
      {/* Query on Symptoms */}
      <View>
        <SymptomsQuery />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Home;

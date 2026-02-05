import { View, StyleSheet, ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Greetings from "../components/Home/Greetings";
import SymptomsQuery from "../components/Home/SymptomsQuery";
import Categories from "../components/Home/Categories";
import VitalsSection from "../components/Home/VitalsSection";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.heyThereText}>যত্নCare 🩺</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* 1. Greetings (Good Evening, Sayan!) */}
          <Greetings />

          {/* 2. Body Content */}
          <View>
            <SymptomsQuery />
            <Categories />
            <VitalsSection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 8, // Adds breathing room on the sides
  },
  headerTextContainer: {
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 20,
    backgroundColor: "#ededed",
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  heyThereText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
});

export default Home;

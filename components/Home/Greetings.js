import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Greetings = ({ username = "Sayan" }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening"; // This handles 6 PM to 4 AM
    }
  };

  return (
    <View style={styles.container}>
      {/* Primary Greeting */}
      <Text style={styles.greetingText}>
        {getGreeting()}, {username}!
      </Text>

      {/* Secondary Support Text */}
      <Text style={styles.subText}>
        Nice to have you here. We're here to support you in every step of your
        journey
      </Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "transparent", // Or match your screen bg
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2b67cb", // The specific blue from your reference image
    marginBottom: 4,
  },
  subText: {
    fontSize: 15,
    color: "#333", // Darker grey/black for readability
    lineHeight: 22,
    opacity: 0.8,
  },
});

import { StyleSheet, Text, View } from "react-native";

const Greetings = ({ username = "Sayan" }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
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
    fontSize: 20,
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

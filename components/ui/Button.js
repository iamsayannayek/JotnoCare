import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, onPress, style, mode }) {
  // If mode="outline", we use the Symptoms card style
  const isOutline = mode === "outline";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isOutline && styles.outlineButton, // Apply white background/border
        style,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
        <Text
          style={[
            styles.buttonText,
            isOutline && styles.outlineText, // Apply blue text color
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#6366f1", // Solid purple/blue for Login/Signup
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  // Specific style for Symptoms Card
  outlineButton: {
    backgroundColor: "#D6ECFA",
    borderWidth: 1.5,
    borderColor: "#4A80F0",
    elevation: 0,
    shadowOpacity: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white", // Text color for Login
    fontSize: 16,
    fontWeight: "700",
  },
  // Text color for Symptoms Card
  outlineText: {
    color: "#4A80F0",
  },
});

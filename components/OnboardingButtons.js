import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OnboardingButtons = ({ onSkip, onNext, onStart, isLast = false }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 14 }]}>
      {/* FIRST & SECOND SCREENS: Skip (left) and Next (right) */}
      {!isLast && (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              if (onSkip) return onSkip();
              if (onStart) return onStart();
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onNext} style={styles.primaryBtn}>
            <Text style={styles.primaryText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* LAST SCREEN ONLY: Centered Start Care */}
      {isLast && (
        <TouchableOpacity onPress={onStart} style={styles.centerBtn}>
          <Text style={styles.centerText}>Start Care</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnboardingButtons;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipText: {
    fontSize: 16,
    color: "#666",
  },
  primaryBtn: {
    backgroundColor: "#924fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 26,
    marginBottom: 20,
  },
  primaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  centerBtn: {
    backgroundColor: "#4F6DFF",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 18,
  },
  centerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

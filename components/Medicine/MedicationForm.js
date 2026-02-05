import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import Button from "../ui/Button";

const MedicationForm = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // important (tab + header)
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.headerTitle}>Medication Details</Text>
        <Text style={styles.subtitle}>
          Fill in the schedule for your medicine
        </Text>

        {/* Dosage */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dosage (e.g. 1 pill, 5ml)</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="pill" size={20} color="#4A80F0" />
            <TextInput style={styles.input} placeholder="Enter dosage" />
          </View>
        </View>

        {/* Frequency */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Frequency</Text>
          <View style={styles.inputWrapper}>
            <FontAwesome5 name="clock" size={18} color="#4A80F0" />
            <TextInput style={styles.input} placeholder="e.g. Twice a day" />
          </View>
        </View>

        {/* Duration */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Duration (Days)</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="calendar-outline" size={20} color="#4A80F0" />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="How many days?"
            />
          </View>
        </View>

        {/* Instructions */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Special Instructions</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="note-text-outline"
              size={20}
              color="#4A80F0"
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              multiline
              placeholder="Before food / After food"
            />
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}}>Done</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MedicationForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1, // Tells ScrollView to take up all available space
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 60, // Important: gives extra space at the bottom so the last button isn't cut off
  },
  container: {
    padding: 24,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 30,
  },
  doneButton: {
    marginBottom: 12,
    paddingVertical: 14,
  },
  cancelButton: {
    borderWidth: 0, // Making the cancel button look like a text link
  },
});

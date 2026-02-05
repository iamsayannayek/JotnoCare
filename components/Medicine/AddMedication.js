import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../ui/Button";
import { useNavigation } from "@react-navigation/native";

const AddMedication = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* 1. Scan Button with Icon */}
      <Button
        onPress={() => console.log("Scanning...")}
        style={styles.scanButton}
      >
        <View style={styles.iconButtonContent}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={24}
            color="white"
          />
          <Text style={styles.buttonText}>Scan your Prescription</Text>
        </View>
      </Button>

      {/* 2. OR Divider */}
      <View style={styles.dividerContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      {/* 3. Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter medicine name"
          placeholderTextColor="#000"
        />
      </View>

      {/* 4. Next Button */}
      <Button
        onPress={() =>
          navigation.navigate("MedicationStack", {
            screen: "MedicationForm",
          })
        }
        style={styles.nextButton}
      >
        Next
      </Button>
    </View>
  );
};

export default AddMedication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 25,
  },
  scanButton: {
    paddingVertical: 14,
    marginBottom: 30,
  },
  iconButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  dividerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  orText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#000",
  },
  nextButton: {
    paddingVertical: 14,
  },
});

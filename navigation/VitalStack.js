import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const VitalStack = () => {
  const navigation = useNavigation();

  const [vitals, setVitals] = useState({
    systolic: "",
    diastolic: "",
    glucose: "",
    heartRate: "",
    temperature: "",
    spo2: "",
    weight: "",
  });

  const handleInputChange = (key, value) => {
    setVitals((prev) => ({ ...prev, [key]: value }));
  };

  const formatDate = (date) => {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${d}/${m}/${y} ${hours}:${minutes} ${ampm}`;
  };

  const handleDone = () => {
    console.log("Saving Vitals:", vitals);
    Alert.alert("Success", "Vitals recorded successfully!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Vitals</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.timeContainer}>
          <View style={styles.timeLabelGroup}>
            <Feather name="clock" size={20} color="black" />
            <Text style={styles.selectTimeText}>Select Time:</Text>
          </View>
          <Text style={styles.dateTimeValue}>{formatDate(new Date())}</Text>
        </View>

        <View style={styles.inputSection}>
          <View style={styles.inputRow}>
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="heart-settings-outline"
                size={24}
                color="#555"
              />
              <Text style={styles.label}>Blood Pressure</Text>
            </View>
            <View style={styles.bpInputGroup}>
              <TextInput
                style={styles.smallInput}
                keyboardType="numeric"
                value={vitals.systolic}
                onChangeText={(val) => handleInputChange("systolic", val)}
              />
              <Text style={styles.slash}>/</Text>
              <TextInput
                style={styles.smallInput}
                keyboardType="numeric"
                value={vitals.diastolic}
                onChangeText={(val) => handleInputChange("diastolic", val)}
              />
            </View>
            <Text style={styles.unit}>mmHg</Text>
          </View>

          <VitalInput
            icon={
              <MaterialCommunityIcons
                name="hand-water"
                size={24}
                color="#555"
              />
            }
            label="Blood Glucose"
            unit="mg/dL"
            value={vitals.glucose}
            onChangeText={(val) => handleInputChange("glucose", val)}
          />

          <VitalInput
            icon={
              <MaterialCommunityIcons
                name="heart-pulse"
                size={24}
                color="#555"
              />
            }
            label="Heart Rate"
            unit="bpm"
            value={vitals.heartRate}
            onChangeText={(val) => handleInputChange("heartRate", val)}
          />

          <VitalInput
            icon={
              <MaterialCommunityIcons
                name="thermometer"
                size={24}
                color="#555"
              />
            }
            label="Temperature"
            unit="°F"
            value={vitals.temperature}
            onChangeText={(val) => handleInputChange("temperature", val)}
          />

          <VitalInput
            icon={
              <MaterialCommunityIcons
                name="water-percent"
                size={24}
                color="#555"
              />
            }
            label="SPO2"
            unit="%"
            value={vitals.spo2}
            onChangeText={(val) => handleInputChange("spo2", val)}
          />

          <VitalInput
            icon={
              <MaterialCommunityIcons
                name="human-male"
                size={24}
                color="#555"
              />
            }
            label="Weight"
            unit="kg"
            value={vitals.weight}
            onChangeText={(val) => handleInputChange("weight", val)}
          />
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const VitalInput = ({ icon, label, unit, value, onChangeText }) => (
  <View style={styles.inputRow}>
    <View style={styles.labelContainer}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </View>
    <TextInput
      style={styles.wideInput}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
    <Text style={styles.unit}>{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 15,
    padding: 12,
    marginTop: 10,
    marginBottom: 25,
  },
  timeLabelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectTimeText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  dateTimeValue: {
    fontSize: 15,
    color: "#4A80F1",
    fontWeight: "500",
  },
  inputSection: {
    gap: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#333",
  },
  bpInputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallInput: {
    width: 55,
    height: 45,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 16,
  },
  wideInput: {
    flex: 1,
    height: 45,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  slash: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  unit: {
    width: 50,
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    textAlign: "right",
  },
  doneButton: {
    backgroundColor: "#537FE7",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default VitalStack;

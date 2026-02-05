import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import Button from "../ui/Button"; // Reusing your dynamic button

const VitalsSection = () => {
  // Mock data based on your images
  const VITALS_DATA = [
    {
      id: "1",
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHG",
      icon: "heart-pulse",
      library: MaterialCommunityIcons,
    },
    {
      id: "2",
      title: "Blood Glucose",
      value: "75",
      unit: "mg/dL",
      icon: "hand-holding-water",
      library: FontAwesome5,
    },
    {
      id: "3",
      title: "Heart Rate",
      value: "70",
      unit: "bpm",
      icon: "heartbeat",
      library: FontAwesome5,
    },
    {
      id: "4",
      title: "Temperature",
      value: "97",
      unit: "F",
      icon: "thermometer",
      library: Fontisto,
    },
    {
      id: "5",
      title: "SPO2",
      value: "98",
      unit: "%",
      icon: "water-outline",
      library: Ionicons,
    },
    {
      id: "6",
      title: "Weight",
      value: "64",
      unit: "kg",
      icon: "person",
      library: Ionicons,
    },
  ];

  const renderVitalsCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <item.library name={item.icon} size={24} color="#555" />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <Text style={styles.averageLabel}>Average reading</Text>
      <Text style={styles.valueText}>
        {item.value} <Text style={styles.unitText}>{item.unit}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Title and See More */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Your Vitals</Text>
        <Pressable onPress={() => console.log("Navigate to See More")}>
          <Text style={styles.seeMoreText}>See more</Text>
        </Pressable>
      </View>

      {/* Horizontal List */}
      <FlatList
        data={VITALS_DATA}
        renderItem={renderVitalsCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
      />

      {/* Add Vitals Button */}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => console.log("Navigate to Add Vitals")}
          style={styles.addVitalsButton}
        >
          Add Vitals
        </Button>
      </View>
    </View>
  );
};

export default VitalsSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#000",
  },
  seeMoreText: {
    fontSize: 18,
    color: "#4A80F0",
    fontWeight: "600",
  },
  listPadding: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginRight: 12,
    width: 180, // Fixed width for horizontal consistency
    // Shadow/Elevation
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10, // space for shadow
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8,
    color: "#000",
  },
  averageLabel: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },
  valueText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  unitText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  addVitalsButton: {
    backgroundColor: "#4A80F0",
    borderRadius: 12,
  },
});

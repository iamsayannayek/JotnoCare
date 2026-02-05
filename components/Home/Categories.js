import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Choose from the categories</Text>

      <View style={styles.row}>
        {/* 1. MEDICINE: Clipboard + Pill */}
        <View style={styles.categoryWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.combinedIconContainer}>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={30}
                color="#4A80F0"
                style={styles.baseIcon}
              />
              <MaterialCommunityIcons
                name="pill"
                size={18}
                color="#4A80F0"
                style={styles.overlayPill}
              />
            </View>
          </Pressable>
          <Text style={styles.categoryText}>Medicine</Text>
        </View>

        {/* 2. SYMPTOMS: Person + Multiple Viruses */}
        <View style={styles.categoryWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.combinedIconContainer}>
              {/* Main Person Icon */}
              <MaterialIcons name="face" size={32} color="#4A80F0" />
              {/* Floating Virus Icons */}
              <MaterialCommunityIcons
                name="virus"
                size={12}
                color="#4A80F0"
                style={styles.virusTopLeft}
              />
              <MaterialCommunityIcons
                name="virus"
                size={10}
                color="#4A80F0"
                style={styles.virusTopRight}
              />
              <MaterialCommunityIcons
                name="virus"
                size={12}
                color="#4A80F0"
                style={styles.virusBottomRight}
              />
            </View>
          </Pressable>
          <Text style={styles.categoryText}>Symptoms</Text>
        </View>

        {/* 3. REPORTS: Medical Folder */}
        <View style={styles.categoryWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && styles.pressed,
            ]}
          >
            <MaterialCommunityIcons
              name="file-chart-outline"
              size={32}
              color="#4A80F0"
            />
          </Pressable>
          <Text style={styles.categoryText}>Reports</Text>
        </View>

        {/* 4. VITALS: Clipboard with List */}
        <View style={styles.categoryWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconCircle,
              pressed && styles.pressed,
            ]}
          >
            <MaterialCommunityIcons
              name="clipboard-pulse-outline"
              size={32}
              color="#4A80F0"
            />
          </Pressable>
          <Text style={styles.categoryText}>Vitals</Text>
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryWrapper: {
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#eff7ff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  combinedIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  /* Medicine Styling */
  baseIcon: {
    position: "absolute",
  },
  overlayPill: {
    position: "relative",
    bottom: -8,
    right: -14,
    backgroundColor: "#eff7ff", // Match circle bg to "cut" the clipboard line
    borderRadius: 10,
  },
  /* Symptoms Virus Positioning */
  virusTopLeft: {
    position: "absolute",
    top: -2,
    left: -2,
  },
  virusTopRight: {
    position: "absolute",
    top: 2,
    right: -4,
  },
  virusBottomRight: {
    position: "absolute",
    bottom: 0,
    right: -2,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: "#d1e9ff",
  },
});

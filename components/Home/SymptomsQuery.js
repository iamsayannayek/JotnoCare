import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../ui/Button";

const SymptomsQuery = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/doctorAsking.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.questionText}>
          Are you experiencing any side effects/symptoms today?
        </Text>

        <View style={styles.buttonRow}>
          {/* Passing mode="outline" for the card style */}
          <Button
            mode="outline"
            style={[styles.actionButton, { marginRight: 10 }]}
          >
            No
          </Button>
          <Button mode="outline" style={styles.actionButton}>
            Yes
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SymptomsQuery;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#D6ECFA",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
  },
  contentContainer: {
    flex: 1.8,
    alignItems: "center", // Center text and buttons
  },
  questionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    width: "100%",
  },
  actionButton: {
    flex: 1,
    paddingVertical: 8, // Thinner buttons for the card
  },
});

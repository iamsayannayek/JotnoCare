import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./navigation/AppNavigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <AppNavigation />
    </>
  );
}

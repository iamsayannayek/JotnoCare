import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { Platform, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { AuthContext } from "../store/AuthContext";

// Screens
import Home from "../screens/Home";
import Health from "../screens/Health";
import Medicine from "../screens/Medicine";
import Finances from "../screens/Finances";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const NativeScreenNavigation = () => {
  const authCtx = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // --- THE TAB BAR STYLE FIX ---
        tabBarStyle: {
          backgroundColor: "#ffffff",
          position: "absolute", // Helps with the shadow visibility
          borderTopLeftRadius: 30, // The rounded corners
          borderTopRightRadius: 30,
          borderTopWidth: 0, // Remove flat line to keep the curve clean

          // Dynamic safe-area aware padding/height
          paddingBottom: insets.bottom ? insets.bottom + 12 : 12,
          paddingTop: 10,
          height: 50 + (insets.bottom ? insets.bottom : 0),

          // Shadow / Elevation (The "Small Shadow Effect")
          elevation: 10, // Android Shadow
          shadowColor: "#000", // iOS Shadow
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },

        tabBarActiveTintColor: "#4A80F0",
        tabBarInactiveTintColor: "#9db2ce", // Lighter grey for inactive
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: -5, // Pull text closer to icon
          marginBottom: insets.bottom ? 6 : 0,
        },

        // Icons
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Health") {
            return <FontAwesome5 name="heartbeat" size={24} color={color} />;
          } else if (route.name === "Medicine") {
            return (
              <MaterialCommunityIcons name="pill" size={26} color={color} />
            );
          } else if (route.name === "Finances") {
            return (
              <Ionicons
                name={focused ? "wallet" : "wallet-outline"}
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      {/* For other screens, we might want the default header back, 
          or you can create custom headers for them too. 
          For now, I'll enable the default header for non-Home screens 
          so you have a Title. */}
      <Tab.Screen
        name="Health"
        component={Health}
        options={{ headerShown: true, headerTitle: "Health Overview" }}
      />
      <Tab.Screen
        name="Medicine"
        component={Medicine}
        options={{ headerShown: true, headerTitle: "Medicines" }}
      />
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{ headerShown: true, headerTitle: "Finances" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true, headerTitle: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default NativeScreenNavigation;

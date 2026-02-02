import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
// Import Icons from Expo
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { AuthContext } from "../store/AuthContext";
import IconButton from "../components/ui/IconButton";
import Home from "../screens/Home";
import Health from "../screens/Health";
import Medicine from "../screens/Medicine";
import Finances from "../screens/Finances";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const NativeScreenNavigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Global Header Settings
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="exit"
            color={tintColor}
            size={24}
            onPress={authCtx.logout}
          />
        ),
        headerStyle: {
          backgroundColor: "#cbecfa",
          // Note: borderRadius on headers can behave oddly on some Android versions
        },

        // Tab Bar Styling based on your reference image
        tabBarStyle: {
          backgroundColor: "#f3f7f8",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 95, // Added height for better icon spacing
          paddingVertical: 18,
          position: "absolute", // Makes the radius visible if there's content behind
          elevation: 8,
        },
        tabBarActiveTintColor: "#4A80F0", // Blue for active
        tabBarInactiveTintColor: "#7D7D7D", // Grey for inactive

        // Dynamic Icon Logic
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Health") {
            // Heartbeat icon from your reference
            return <FontAwesome5 name="heartbeat" size={size} color={color} />;
          } else if (route.name === "Medicine") {
            // Pill icon
            return (
              <MaterialCommunityIcons name="pill" size={size} color={color} />
            );
          } else if (route.name === "Finances") {
            // Wallet/Bill icon
            return (
              <Ionicons
                name={focused ? "wallet" : "wallet-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
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
        options={{
          headerTitle: "Hey there 👋",
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Health"
        component={Health}
        options={{
          headerTitle: "Your Health Overview",
          tabBarLabel: "Health",
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Medicine}
        options={{
          headerTitle: "Medication",
          tabBarLabel: "Medicine",
        }}
      />
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          headerTitle: "Finances",
          tabBarLabel: "Finances",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Details",
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default NativeScreenNavigation;

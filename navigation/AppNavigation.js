import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Importing constants
import { Colors } from "../constants/styles";

//Import Components
import IconButton from "../components/ui/IconButton";

//Import Screens
//Onboarding Screen
import OnboardingScreen from "../screens/OnboardingScreen";
//Authentication Screens
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

//App Actual Screens
import Home from "../screens/Home";
import NativeScreenNavigation from "./NativeScreenNavigation";

import { AuthContext } from "../store/AuthContext";
import { getItem } from "../util/onboardedAsyncStorage";

const Stack = createStackNavigator();

//Authentication Stack
function AuthStack() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  async function checkIfAlreadyOnboarded() {
    let onboarded = await getItem("onboarded");

    if (onboarded === "1") {
      //Onboarded Complete: Hide the onboarding
      setShowOnboarding(false);
    } else {
      //No completed: show the onboarding
      setShowOnboarding(true);
    }
  }

  if (showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.primary100 },
        }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.primary100 },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

//Home Screen after authentication
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="NativeScreenNavigation"
        component={NativeScreenNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default AppNavigation;

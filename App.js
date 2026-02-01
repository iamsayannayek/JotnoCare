import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigation from "./navigation/AppNavigation";
import { StatusBar } from "expo-status-bar";

// Import Store
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
import { useContext, useEffect } from "react";

function Root() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }
    fetchToken();
  }, []);

  return <AppNavigation />;
}

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />

      <Root />
    </AuthContextProvider>
  );
}

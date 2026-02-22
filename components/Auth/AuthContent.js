import { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import SignupForm from "./SignupForm";
import { Colors } from "../../constants/styles";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <ScrollView
      contentContainerStyle={
        isLogin ? styles.container : styles.signupContainer
      }
    >
      <Text style={styles.welcome}>Welcome to JotnoCare</Text>
      <Text style={styles.subtitle}>
        Your trusted healthcare partner anytime, anywhere
      </Text>

      <Image
        source={require("../../assets/icon.png")}
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        {isLogin ? "Login" : "Create an account"}
      </Text>
      <Text style={styles.subtitleSecondary}>
        {isLogin ? "" : "Enter your details to sign up for this app"}
      </Text>

      <View style={styles.formContainer}>
        {isLogin ? (
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
        ) : (
          <>
            <SignupForm
              onSubmit={async (values) => {
                // Validate and forward email & password to parent authenticate handler
                const { name, email, password, confirmPassword } = values;
                if (
                  !email ||
                  !email.includes("@") ||
                  !password ||
                  password.length < 6 ||
                  password !== confirmPassword
                ) {
                  Alert.alert(
                    "Invalid input",
                    "Please check your entered credentials.",
                  );
                  return;
                }
                onAuthenticate({ email: email.trim(), password });
              }}
            />

            <Text style={styles.terms}>
              By clicking continue, you agree to our{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://example.com/terms")}
              >
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://example.com/privacy")}
              >
                Privacy Policy
              </Text>
            </Text>
          </>
        )}
      </View>

      <View style={styles.signupRow}>
        <Text style={styles.text}>
          {isLogin ? "Don't have an account ? " : "Already have an account ? "}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.replace(isLogin ? "Signup" : "Login")}
        >
          <Text style={styles.signupLink}>
            {isLogin ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 75,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  signupContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  subtitle: {
    color: "#666",
    marginBottom: 18,
    textAlign: "center",
  },
  icon: {
    width: 180,
    height: 180,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.primary800,
    marginBottom: 16,
  },
  subtitleSecondary: {
    color: "#444",
    marginBottom: 12,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  signupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  text: {
    color: "#111",
    fontSize: 14,
  },
  signupLink: {
    color: Colors.primary500,
    fontWeight: "600",
    marginLeft: 6,
  },
  terms: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
    paddingHorizontal: 18,
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: "underline",
  },
});

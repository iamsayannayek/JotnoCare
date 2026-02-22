import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Button from "../ui/Button";
import Input from "./Input";

function SignupForm({ onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submitHandler() {
    onSubmit({ name: fullName, email, password, confirmPassword });
  }

  return (
    <View style={styles.form}>
      <Input
        placeholder="Full Name"
        onUpdateValue={setFullName}
        value={fullName}
      />
      <Input
        placeholder="Email Address"
        onUpdateValue={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onUpdateValue={setPassword}
        value={password}
        secure
      />
      <Input
        placeholder="Re-type Password"
        onUpdateValue={setConfirmPassword}
        value={confirmPassword}
        secure
      />

      <View style={styles.buttons}>
        <Button onPress={submitHandler}>Continue</Button>
      </View>
    </View>
  );
}

export default SignupForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },
  buttons: {
    marginTop: 16,
    width: "100%",
  },
});

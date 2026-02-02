import { View, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

function Input({
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9ea3ad"
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  inputInvalid: {
    borderColor: Colors.error500,
  },
});

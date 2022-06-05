import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("cheran");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      {/* multiline prop inside TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Name.."
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="age.."
        onChangeText={(val) => setAge(val)}
      />

      <Text>name is {name}</Text>
      <Text>age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

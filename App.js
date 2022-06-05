import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("cheran");
  const [toggle, setToggle] = useState(false);
  function clickHandler(e) {
    e.preventDefault();
    if (!toggle) {
      setName("changed");
      setToggle(true);
    } else {
      setName("cheran");
      setToggle(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>printing name {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
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
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

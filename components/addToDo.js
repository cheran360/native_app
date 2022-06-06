import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo.."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add Todo"
        color="coral"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

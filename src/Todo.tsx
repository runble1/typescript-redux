import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./../src/store";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector<any, Array<string>>(state => state.todos);

  const addTodoOnPress = title => {
    if (title === "") {
    }
    dispatch(addTodo(title));

    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Button title="タイトル" onPress={() => addTodoOnPress("aaa")} />
      {todos.map((t, i) => (
        <View key={i}>
          <Text>{t}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    margin: 10
  }
});

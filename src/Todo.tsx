import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./../src/store";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector<any, Array<string>>(state => state.todos);

  const addTodoOnPress = () => {
    if (todo === "") {
      return;
    }

    dispatch(addTodo(todo));

    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Text>TODO 入力</Text>
      <TextInput value={todo} onChangeText={t => setTodo(t)}></TextInput>
      <Button title="保存" onPress={addTodoOnPress} />
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
  }
});

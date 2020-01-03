import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "./../src/store";

export default function Todo() {
  //const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const target = useSelector<any, String>(state => state.question);

  const setQuestionOnPress = question => {
    if (question === "") {
    }
    dispatch(setQuestion(question));
  };

  return (
    <View style={styles.container}>
      <Button
        title="タイトル1"
        onPress={() => setQuestionOnPress("タイトル1")}
      />
      <Button
        title="タイトル2"
        onPress={() => setQuestionOnPress("タイトル2")}
      />
      <Text>{target}</Text>
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

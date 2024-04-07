import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { configs } from "../utils/constants";
import { todoActions } from "../redux/reducer/todo";
import { useNavigation } from "@react-navigation/native";
import styles from "./AddTodoScreen.css";

const AddTodoScreen = () => {
  const navigation = useNavigation();
  // State Hooks
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    dispatch(todoActions.SET_TODO(newTask));
    navigation.goBack();
  }
  // Render TodoList Component
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput_style}
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <TouchableOpacity style={styles.button_addTodo} onPress={addTask}>
        <Text style={styles.addText_style}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddTodoScreen;

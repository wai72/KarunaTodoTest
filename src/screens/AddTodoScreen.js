import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { configs } from "../utils/constants";
import { todoActions } from "../redux/reducer/todo";
import { useNavigation } from "@react-navigation/native";
import styles from "./AddTodoScreen.css";
import Toast from 'react-native-toast-message';

const AddTodoScreen = () => {
  const navigation = useNavigation();
  // State Hooks
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    dispatch(todoActions.SET_TODO(newTask));
    showToast("Successful", "Added")
    navigation.goBack();
  }
  const showToast = (text1, text2) => {
    Toast.show({
      type: 'Info', 
      text1: text1, 
      text2: text2, 
      position: 'bottom', 
      visibilityTime: 3000, 
      autoHide: true, 
      topOffset: 30, 
      bottomOffset: 40,
    });
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

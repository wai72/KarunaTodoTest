import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { configs } from "../utils/constants";
import { todoActions } from "../redux/reducer/todo";
import { useNavigation } from "@react-navigation/native";


const AddTodoScreen = () => {
  const navigation = useNavigation();
  // State Hooks
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    dispatch(
      todoActions.SET_TODO(
       newTask
      ),
    );
    navigation.goBack();
  }
  // Render TodoList Component
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 16, justifyContent: 'center' }}>
      <TextInput
        style={{
          borderColor: configs.colors.lightGray,
          height: 50,
          borderWidth: 1,
          paddingLeft: 4,
          borderRadius: 8,
        }}
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <TouchableOpacity style={{width: 60, height: 50, marginVertical: 16, backgroundColor: configs.colors.green, justifyContent: 'center', borderRadius: 8}} onPress={addTask}>
      <Text style={{color: configs.colors.white, alignSelf: 'center'}}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddTodoScreen;

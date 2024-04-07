import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { todoActions } from "../redux/reducer/todo";
import styles from './TodoListStyle.css'
import Icon from 'react-native-vector-icons/Feather';
import { configs } from "../utils/constants";
import Toast from 'react-native-toast-message';


const TodoList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const TODO_LIST = useSelector(
    state => state.todo?.todoList,
  );

  const onPressFAB = () => {
    navigation.navigate("AddTodo");
  };

  // Function to Delete Task
  function deleteTask(newTask) {
    dispatch(
      todoActions.DELETE_TODO(
        newTask
      ),
    );
    showToast("Successful", "Deleted")
  }
  // Function to Toggle Task Completion
  function toggleCompleted(newTask) {
    dispatch(
      todoActions.UPDATE_TODO(
       newTask
      ),
    );
  }
  const showToast = (text1, text2) => {
    Toast.show({
      type: 'Info', 
      text1: text1, 
      text2: text2, 
      position: 'top', 
      visibilityTime: 3000, 
      autoHide: true, 
      topOffset: 30, 
      bottomOffset: 40,
    });
}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.toto_list}>
          {TODO_LIST.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask= {() => {deleteTask(task)}}
              toggleCompleted={() => {toggleCompleted(task)}}
            />
          ))}
        </View>
      </ScrollView>
      {/* Floating action button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={onPressFAB}>
        <Text style={{color: configs.colors.white}}>Add</Text>
        {/* <Icon name="plus" size={24} color="#000" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoList;

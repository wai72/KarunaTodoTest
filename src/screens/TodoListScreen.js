import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { todoActions } from "../redux/reducer/todo";
import styles from './TodoListStyle.css'
import Icon from 'react-native-vector-icons/Feather';


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
  }
  // Function to Toggle Task Completion
  function toggleCompleted(newTask) {
    dispatch(
      todoActions.UPDATE_TODO(
       newTask
      ),
    );
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
        <Icon name="plus" size={24} color="#000000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoList;

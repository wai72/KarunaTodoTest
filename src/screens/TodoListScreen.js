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
import Toast from 'react-native-simple-toast';


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
    Toast.show('Deleted!', Toast.LONG, {
      backgroundColor: configs.colors.lightGray,
    });
  }
  // Function to Toggle Task Completion
  function toggleCompleted(newTask) {
    dispatch(
      todoActions.UPDATE_TODO(
       newTask
      ),
    );
    Toast.show('This task is completed!', Toast.LONG, {
      backgroundColor: configs.colors.lightGray,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.container}>
      {TODO_LIST.length === 0 ? (
        <Text style={styles.emptyMessage}>List is Empty</Text>
      ) : (
        <View style={styles.toto_list}>
          {TODO_LIST.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={() => deleteTask(task)}
              toggleCompleted={() => toggleCompleted(task)}
            />
          ))}
        </View>
      )}
    </View>
        {/* <View style={styles.toto_list}>
          
          {TODO_LIST.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask= {() => {deleteTask(task)}}
              toggleCompleted={() => {toggleCompleted(task)}}
            />
          ))}
        </View> */}
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

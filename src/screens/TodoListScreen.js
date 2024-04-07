import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { todoActions } from "../redux/reducer/todo";


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
   // setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
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
        <View style={{ padding: 16, flex: 1 }}>
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
        onPress={() => console.log("FAB pressed")} // Add your FAB functionality here
      >
        <FAB icon="plus" onPress={onPressFAB} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TodoList;

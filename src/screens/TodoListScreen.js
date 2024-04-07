import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import { FAB } from 'react-native-paper';
//import { useNavigation } from '@react-navigation/native';


const TodoList = () => {
  //const navigation = useNavigation();
  const onPressFAB = () => {
    // Handle FAB press
   //navigation.navigate('AddTodoScreen');
  };
  // State Hooks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at School", completed: false },
  ]);

  // Function to Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={{ padding: 16, flex: 1 }}>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </View>
      </ScrollView>
      {/* Floating action button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log('FAB pressed')} // Add your FAB functionality here
      >
        <FAB
        icon="plus"
        onPress={onPressFAB}
      />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TodoList;

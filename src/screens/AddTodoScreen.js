import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import Header from "../components/Header";

const AddTodoScreen = () =>{
  // State Hooks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at School", completed: false },
  ]);
  const [text, setText] = useState("");
  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  }
  // Render TodoList Component
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={{ paddingHorizontal: 16, flexDirection: "row" ,  position: 'absolute', bottom: 0}}>
<TextInput
  style={{
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 4,
  }}
  value={text}
  onChangeText={setText}
  placeholder="New Task"
/>
<Button title="Add" onPress={addTask} />
</View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default AddTodoScreen;




import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style/TodoItemStyles.css';
import Icon from 'react-native-vector-icons/AntDesign';


const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
    return (
      <View style={styles.todo_container}>
      <View style={styles.todo_item}>
        <CheckBox
         // style={styles.complete_checkbox}
          value={task.completed}
          onValueChange={() => toggleCompleted(task.id)}
        />
        <Text style={styles.todo_item_text}>
          {task.text}
        </Text>
        <TouchableOpacity
          style={styles.delete_button}
          onPress={() => deleteTask(task.id)}
        >
           <Image
        source={require('../assets/icon_delete_24.png')} 
        style={styles.delete_image}
      />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
  export default TodoItem;
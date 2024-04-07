import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style/TodoItemStyles.css';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
    return (
        <View>
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
          <Text style={{ color: '#fff' }}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: "#ABABB0"}}/>
      </View>
    );
  }
  export default TodoItem;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoListScreen from '../screens/TodoListScreen';
import AddTodoScreen from '../screens/AddTodoScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" title="Todo List" component={TodoListScreen}  />
        <Stack.Screen name="AddTodo" title="Add Todo" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
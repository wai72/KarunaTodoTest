/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

// Market is used for handling market data (Eg. exchange rate, currencies...)
// which are not belonged to user wallet

const todo = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    GET_TODO: () => {},
    SET_TODO: (state, action) => {
        state.todoList = [...state.todoList, action.payload];
    },
  },
});

export const todoActions = todo.actions;

export default todo;
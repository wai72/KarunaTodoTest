import {combineReducers} from 'redux';
import Todo from './todo';

// Actions
export const actions = {
  todo: Todo.actions,
};

// Reducers
export default combineReducers({
  todo: Todo.reducer,
});
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO,FILTER_TODO } from "../types/todo";

let nextTodoId = 0;


export const addTodo = (value) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    value:value,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editStatus  = (id) => ({
  type: FILTER_TODO,
  payload: { id },
});

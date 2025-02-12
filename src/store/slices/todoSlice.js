import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

function findTodo(state, action) {
  return state.todos.find((todo) => todo.id === action.payload.id);
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        ...action.payload,
      });
    },
    updateTodo: (state, action) => {
      const exist = findTodo(state, action);

      if (exist) {
        exist.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },
    toggleComplete: (state, action) => {
      const exist = findTodo(state, action);
      if (exist) {
        exist.completed = !exist.completed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;

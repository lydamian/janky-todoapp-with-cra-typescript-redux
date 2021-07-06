import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import faker from 'faker';
import type { RootState } from '../../redux/store'

// Define a type for the slice state
interface Todo {
  todo: string,
  created_at: Date,
}

interface TodoState {
  todos: Array<Todo>
}

// Define the initial state using that type
const initialState: TodoState = {
  todos: [
    {
      todo: faker.lorem.words(),
      created_at: new Date()
    },
    {
      todo: faker.lorem.words(),
      created_at: new Date()
    },
    {
      todo: faker.lorem.words(),
      created_at: new Date()
    },
  ]
}


export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo, i) => {
        return i !== action.payload;
      });
    },
  }
})

export const selectTodos = (state: RootState) => state.todos.todos

export const {
  addTodo,
  removeTodo,
} = todosSlice.actions

export default todosSlice.reducer;
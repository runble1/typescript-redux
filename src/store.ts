import { createStore } from "redux";

// actions
const ADD_TODO_ACTION = "ADD_TODO";

// action creaters
export function addTodo(todo: string) {
  return {
    type: ADD_TODO_ACTION,
    payload: {
      todo
    }
  };
}

// init state
const initState = {
  todos: []
};

// reducer
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return {
        todos: [...state.todos, action.payload.todo]
      };
    default:
      return state;
  }
};

// store
export const store = createStore(todoReducer);

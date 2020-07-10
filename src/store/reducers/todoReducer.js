const initialState = {
  todos: [],
  todo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload.todos };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload.todo] };
    // atau
    // return { ...state, todos: state.todos.concat(action.payload.todo) };
    default:
      return state;
  }
};

export default todoReducer;

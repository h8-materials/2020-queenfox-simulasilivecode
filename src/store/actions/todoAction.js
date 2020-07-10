export const getTodos = () => {
  return async (dispatch, getState) => {
    // sebelum add ke client, pastikan dulu get data dari server nya berhasil
    const res = await fetch("http://localhost:3000/tasks");
    const todos = await res.json();
    dispatch({
      type: "GET_TODOS",
      payload: {
        todos,
      },
    });
  };
};

export const addTodo = (inputTodo) => {
  // sebelum add ke client, pastikan dulu add data di server nya berhasil
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputTodo),
    });
    const todo = await res.json();
    dispatch({
      type: "ADD_TODO",
      payload: {
        todo,
      },
    });
  };
};

export const deleteTodo = (delTodo) => {
  // sebelum delete data di client pastikan dulu delete di server nya berhasil
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:3000/tasks/${delTodo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { todos } = getState().todoReducer;
    var todoFiltered = todos.filter((todo) => todo.id !== delTodo.id);
    dispatch({
      type: "GET_TODOS",
      payload: {
        todos: todoFiltered,
      },
    });
  };
};

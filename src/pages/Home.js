import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo } from "../store/actions/todoAction";

export default () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const onDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div>
      <h1>Home page</h1>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title} <button onClick={() => onDelete(todo)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

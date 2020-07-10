import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoAction";

export default () => {
  const [inputTodo, setInputTodo] = useState({
    title: "",
    category: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newInputTodo = { ...inputTodo, [name]: value };
    setInputTodo(newInputTodo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // sebelum dispatch perlu di validate dulu datanya
    dispatch(addTodo(inputTodo));
  };

  return (
    <div>
      <h1>Carete page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={inputTodo.title}
          onChange={onChange}
        />
        <select onChange={onChange} name="category" value={inputTodo.category}>
          <option>--- select category ---</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">FrontEnd</option>
          <option value="Mbile">Mobile</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [list, setList] = useState([]);

  const addListItem = (item) => {
    setList([item, ...list]);
  };

  return (
    <>
      <TodoForm onAddItem={addListItem} />
      <TodoList list={list} />
    </>
  );
};

export default Todo;

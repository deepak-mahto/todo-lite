import React from "react";

const TodoList = ({ list }) => {
  return (
    <ul>
      {list && list.map((item) => <li key={`${item.id}`}>{item.text}</li>)}
    </ul>
  );
};

export default TodoList;

import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// React >= v18 syntax
interface Props {
  // children: React.ReactNode;
  items: Todo[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

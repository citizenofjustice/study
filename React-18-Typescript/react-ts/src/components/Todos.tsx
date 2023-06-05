import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "../components/Todos.module.css";

// React >= v18 syntax
interface Props {
  // children: React.ReactNode;
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          onTodoClick={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;

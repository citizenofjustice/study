import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const RemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: AddTodoHandler,
    removeTodo: RemoveTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext };

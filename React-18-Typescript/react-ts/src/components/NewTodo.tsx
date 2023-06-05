import { useRef } from "react";

import classes from "../components/NewTodo.module.css";

interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // "?" means that if input value is deafault then result will be "null"
    // "!" means that if we are sure that value is NOT "null"

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
    // onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;

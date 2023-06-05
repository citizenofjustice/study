import classes from "../components/TodoItem.module.css";

interface Props {
  text: string;
  onTodoClick: () => void;
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li onClick={props.onTodoClick} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;

// Importing librarys and hooks
import React, { useState } from "react";

/**
 * Renders input form for adding new element to the todo-list
 * @returns InputForm component
 */
const InputForm = (props) => {
  // initialazing context for data manipulation
  const [state, setState] = useState([]);

  // declaring useState for manipulating taskTitle, taskDescription, taskEndDate
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskEndDate, setTaskEndDate] = useState("");

  // variable for storing and changing checkbox attributes
  const [isСhecked, setIsСhecked] = useState(false);

  // object in which we put task data from input fields
  const taskData = {
    title: taskTitle,
    description: taskDescription,
    date: taskEndDate,
    hasFiles: isСhecked,
    isCompleted: false,
    isUnfolded: false,
  };

  const titleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setTaskDescription(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setTaskEndDate(event.target.value);
  };

  const hasFilesChangeHandler = (event) => {
    setIsСhecked(event.target.checked);
  };

  const resetCheckbox = () => {
    const hasFiles = document.getElementById("checkbox");
    hasFiles.checked = false;
  };

  const inputData = (inputs) => {
    // adding inputs data to the array containing previous tasks
    addTask(inputs);
  };

  const reset = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskEndDate("");
    resetCheckbox();
  };

  const addTask = async (inputs) => {
    console.log("addtask");
    try {
      const response = await fetch("/tasks.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      const index = await result.name;

      const newInput = { ...inputs, index };
      props.onAddTask(newInput);
      setState([...state, newInput]);
    } catch (error) {
      console.log("Error has occured: " + error);
    }
  };

  const inputFormDataHandler = (event) => {
    event.preventDefault();
    try {
      if (
        taskTitle.trim().length === 0 ||
        taskDescription.trim().length === 0 ||
        taskEndDate.trim().length === 0
      ) {
        throw new Error(
          "Some of the required input fields are empty. Try filling them out and adding the task again."
        );
      } else {
        inputData(taskData);
        reset();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={inputFormDataHandler} id="newTask">
      <input
        form="newTask"
        type="text"
        placeholder="Введите заголовок задачи"
        onChange={titleChangeHandler}
        value={taskTitle}
      />
      <textarea
        form="newTask"
        type="text"
        placeholder="Введите описание задачи"
        onChange={descriptionChangeHandler}
        value={taskDescription}
      />
      <div>
        <input
          form="newTask"
          type="date"
          onChange={endDateChangeHandler}
          value={taskEndDate}
        />
        <div>
          <label>Будут прикрепляться файлы</label>
          <input
            form="newTask"
            id="checkbox"
            type="checkbox"
            onChange={hasFilesChangeHandler}
            onSubmit={resetCheckbox}
          />
        </div>
      </div>
      <div>
        <button form="newTask" type="submit">
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default InputForm;

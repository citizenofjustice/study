import "./App.css";
import InputForm from "./InputForm";
import List from "./List";

const App = () => {
  let passData;
  const inputsHandler = (inputData) => {
    passData = inputData;
  };
  return (
    <div className="App">
      <InputForm onAddTask={inputsHandler}></InputForm>
      <List inputs={passData}></List>
    </div>
  );
};

export default App;

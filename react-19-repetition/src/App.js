import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue] = useState("Текст в поле ввода");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;

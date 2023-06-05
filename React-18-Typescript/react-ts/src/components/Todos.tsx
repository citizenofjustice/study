import React from "react";

// React >= v18 syntax
interface Props {
  // children: React.ReactNode;
  items: string[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

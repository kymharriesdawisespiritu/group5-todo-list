import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, counted] = useState(0);
  const increment = () => {
    counted(count + 1);
  };
  const decrement = () => {
    counted(count - 1);
  };
  return (
    <div className="App">
      <input></input>
      <button onClick={increment}>take a count </button>
      <button onClick={decrement}>less a count</button>
      <p>{count}</p>
    </div>
  );
}

export default App;

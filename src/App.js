import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Hi,Tamanna</h1>
      <h1>{count}</h1>
      <button id="incr" onClick={increase}>
        increament
      </button>
      <button id="decr" onClick={decrease}>
        decrement
      </button>
    </div>
  );
}

export default App;

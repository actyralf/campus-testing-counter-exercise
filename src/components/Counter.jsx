import { useState } from "react";

export function Counter({ initialValue, onSubmit }) {
  const [count, setCount] = useState(initialValue);

  function handleIncrement() {
    setCount((prevCount) => (prevCount >= 10 ? 10 : prevCount + 1));
  }

  function handleDecrement() {
    setCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Counter Component</h2>
      <p data-testid="counter-display">{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <button onClick={() => onSubmit(count)}>Apply changes</button>
      </div>
    </div>
  );
}

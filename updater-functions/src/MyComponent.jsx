import React, { useState } from "react";

// Updater Function are functions passed as an argument to setState()
// Allows for safe updates based on the previous state
// setCount((c) => c + 1) instead of setCount(count + 1)

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button onClick={decrement} className="counter-button">
        Decrement
      </button>

      <button onClick={reset} className="counter-button">
        Reset
      </button>

      <button onClick={increment} className="counter-button">
        Increment
      </button>
    </div>
  );
};

export default MyComponent;

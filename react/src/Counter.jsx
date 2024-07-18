import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <span>
        <button
          onClick={() => {
            decrement();
          }}
        >
          decrement
        </button>
      </span>
      <div>{count}</div>
      <span>
        <button
          onClick={() => {
            increment();
          }}
        >
          increment
        </button>
      </span>
    </div>
  );
};

export default Counter;

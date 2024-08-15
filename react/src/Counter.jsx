import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./reedux/CounterSlice";

const Counter = () => {
  const dispater = useDispatch();

  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <span>
        <button
          onClick={() => {
            dispater(decrement());
          }}
        >
          decrement
        </button>
      </span>
      <div>{count}</div>
      <span>
        <button
          onClick={() => {
            dispater(increment());
          }}
        >
          increment
        </button>
      </span>
    </div>
  );
};

export default Counter;

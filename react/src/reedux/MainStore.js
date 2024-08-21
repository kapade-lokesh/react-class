import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import CartReducer from "./CartSllice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartdata:CartReducer
  },
});

export default Store;

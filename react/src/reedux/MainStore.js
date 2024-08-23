import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import CartReducer from "./CartSllice";
import UserReducer from "./UserSlice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartdata: CartReducer,
    user: UserReducer,
  },
});

export default Store;

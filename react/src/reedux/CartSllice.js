import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.cart = [...state.cart, newItem];
    },

    clearCart: (state, action) => {
       
      state.cart = [];
    },

    increaseQty: (state, action) => {
      const newitem = state.cart.find((item) => item.id === action.payload);
      newitem.quantity += 1;
    },
    decreseQty: (state, action) => {
      const newitem = state.cart.find((item) => item.id === action.payload);
      newitem.quantity -= 1;
    },
  },
});

export const { addItem, increaseQty, decreseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

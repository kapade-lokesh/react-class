import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  login: false,
  Register: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    isRegister: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
      state.Register = true;
      console.log(state.userData);
    },

    isLogin: (state, action) => {
      console.log(action.payload);
      if (
        state.userData.name == action.payload.name &&
        state.userData.password == action.payload.password
      ) {
        state.login = true;
      }
    },

    logout: (state, action) => {
      state.login = false;
      state.userData = {};
    },
  },
});

export const { isRegister, isLogin, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: [],
    favourites: [],
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const { login, logout, setUser, setFavourites } = authslice.actions;
export default authslice.reducer;
// src/slices/authSlice.js
// authSlice.js
// authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { login, logout, setUser } = authSlice.actions;

// export default authSlice.reducer;



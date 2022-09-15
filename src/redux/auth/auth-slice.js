import { createSlice } from "@reduxjs/toolkit";

import {
  signup,
  login,
  logout,
  getCurrent,
  googleLogIn,
} from "./auth-operations";

const initialState = {
  user: { name: null, email: null, picture: null },
  token: null,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signup.pending]: (store) => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [login.pending]: (store) => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [logout.pending]: (store) => ({ ...store, loading: true, error: null }),
    [logout.fulfilled]: (store) => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [getCurrent.pending]: (store) => ({ ...store, loading: true, error: null }),
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [getCurrent.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [googleLogIn.pending]: (store) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [googleLogIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user.name = payload.name;
      store.user.email = payload.email;
      store.user.picture = payload.picture;
      // store.token = payload;
      store.isLogin = true;
    },
    [googleLogIn.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;

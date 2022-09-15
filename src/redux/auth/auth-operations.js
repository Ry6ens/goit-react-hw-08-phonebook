import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchSignUp,
  fetchLogIn,
  fetchLogOut,
  fetchCurrent,
} from "../../services/apiAuth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await fetchSignUp(data);
      return result;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await fetchLogIn(data);
      return result;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchLogOut();
      return result;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  }
);

export const getCurrent = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await fetchCurrent(auth.token);
      return result;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();

      if (!auth.token) {
        return false;
      }
    },
  }
);

export const googleLogIn = createAsyncThunk(
  "auth/googleLogIn",
  async (data, { rejectWithValue }) => {
    try {
      // const result = await fetchLogIn(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSignUp, fetchLogIn } from "../../services/apiAuth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    console.log(data);

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
    console.log(data);
    try {
      const result = await fetchLogIn(data);
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
      console.log(error.message);
    }
  }
);

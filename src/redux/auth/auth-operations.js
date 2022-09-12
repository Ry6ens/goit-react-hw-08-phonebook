import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const register = createAsyncThunk("auth/register", async (credentails) => {
  try {
    const data = await axios.post("users/signup", credentails);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

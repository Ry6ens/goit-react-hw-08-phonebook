import { createSlice } from "@reduxjs/toolkit";

import {
  getContactsOperations,
  postContactsOperations,
  removeContactsOperation,
} from "../operations";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  extraReducers: {
    [getContactsOperations.rejected]: (_, { payload }) => {
      return payload;
    },
    [postContactsOperations.rejected]: (_, { payload }) => {
      return payload;
    },
    [removeContactsOperation.rejected]: (_, { payload }) => {
      return payload;
    },
    [postContactsOperations.pending]: () => null,
    [getContactsOperations.pending]: () => null,
    [removeContactsOperation.pending]: () => null,
  },
});

// export const { setError, resetError } = errorSlice.actions;

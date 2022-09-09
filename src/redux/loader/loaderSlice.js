import { createSlice } from "@reduxjs/toolkit";

import {
  getContactsOperations,
  postContactsOperations,
  removeContactsOperation,
} from "../operations";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  extraReducers: {
    [getContactsOperations.pending]: () => true,
    [getContactsOperations.fulfilled]: () => false,
    [getContactsOperations.rejected]: () => false,
    [postContactsOperations.pending]: () => true,
    [postContactsOperations.fulfilled]: () => false,
    [postContactsOperations.rejected]: () => false,
    [removeContactsOperation.pending]: () => true,
    [removeContactsOperation.fulfilled]: () => false,
    [removeContactsOperation.rejected]: () => false,
  },
});

// export const { onLoader, offLoader } = loaderSlice.actions;

// reducers: {
//     onLoader: (state) => {
//       state.bool = true;
//     },
//     offLoader: (state) => {
//       state.bool = false;
//     },
//   },

import { createSlice } from "@reduxjs/toolkit";

import {
  getContactsOperations,
  postContactsOperations,
  removeContactsOperation,
} from "../operations";

export const getContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  extraReducers: {
    [getContactsOperations.fulfilled]: (_, { payload }) => {
      return payload;
    },
    [postContactsOperations.fulfilled]: (store, { payload }) => {
      store.push(payload);
    },
    [removeContactsOperation.fulfilled]: (store, { payload }) => {
      return store.filter((el) => el.id !== payload);
    },
  },
});

export const { getContacts, postContact, removeContacts } =
  getContactsSlice.actions;

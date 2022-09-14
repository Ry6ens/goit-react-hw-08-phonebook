import Notiflix from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchPostContacts,
  fetchGetContacts,
  fetchDeleteContacts,
} from "../services/api";

const isDuplicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find((item) => {
    return normalizedName === item.name.toLowerCase();
  });

  return Boolean(result);
};

//Fetch contacts
export const getContactsOperations = createAsyncThunk(
  "contacts/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchGetContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Add contacts
export const postContactsOperations = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      const contact = await fetchPostContacts(data);
      console.log(contact);
      return contact.data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDuplicate(data, contacts.items)) {
        Notiflix.Notify.warning(`${data.name} is already exists`);
        return false;
      }
    },
  }
);

//Remove contacts
export const removeContactsOperation = createAsyncThunk(
  "contacts/remove",
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

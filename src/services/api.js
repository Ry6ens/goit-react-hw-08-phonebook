import axios from "axios";

import { instance } from "./apiAuth";

export const fetchPostContacts = async (contact) => {
  return await instance.post("/contacts", contact);
};

export const fetchGetContacts = async () => {
  return await instance.get("/contacts");
};

export const fetchDeleteContacts = async (id) => {
  return await instance.delete(`/contacts/${id}`);
};

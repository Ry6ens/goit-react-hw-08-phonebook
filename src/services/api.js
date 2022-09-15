// import axios from "axios";

import { instance } from "./apiAuth";

// const instance = axios.create({
//   baseURL: "https://631878cbf6b281877c6d54c6.mockapi.io",
// });

export const fetchPostContacts = async (contact) => {
  return await instance.post("/contacts", contact);
};

export const fetchGetContacts = async () => {
  return await instance.get("/contacts");
};

export const fetchDeleteContacts = async (id) => {
  return await instance.delete(`/contacts/${id}`);
};

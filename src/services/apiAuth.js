import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

const setToken = (token = "") => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
};

export const fetchSignUp = async (data) => {
  const { data: result } = await instance.post("users/signup", data);
  setToken(result.token);
  return result;
};

export const fetchLogIn = async (data) => {
  const { data: result } = await instance.post("users/login", data);
  console.log(result);
  setToken(result.token);

  return result;
};

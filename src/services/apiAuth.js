import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const fetchSignUp = async (data) => {
  const { data: result } = await instance.post("users/signup", data);
  setToken(result.token);
  return result;
};

export const fetchLogIn = async (data) => {
  const { data: result } = await instance.post("users/login", data);
  setToken(result.token);

  return result;
};

export const fetchLogOut = async () => {
  const { data: result } = await instance.post("users/logout");
  setToken("");

  return result;
};

export const fetchCurrent = async (token) => {
  setToken(token);
  try {
    const { data: result } = await instance.get("users/current");
    return result;
  } catch (error) {
    setToken("");
    throw error;
  }
};

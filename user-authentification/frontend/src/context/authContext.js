import { createContext } from "react";
export const authValue = {
  token: localStorage.getItem("token") || null,
  setToken: (token) => {
    localStorage.setItem("token", token);
  },
};
export const AuthContext = createContext(authValue);

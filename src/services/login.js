import axios from "axios";
import { baseURL } from "./config";

export const login = (rutLogin, passwordLogin) =>
  axios
    .post(`${baseURL}/login`, {
      rut: rutLogin,
      password: passwordLogin,
    })
    .catch((err) => {
      console.log(err);
    });

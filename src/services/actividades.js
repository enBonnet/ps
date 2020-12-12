import axios from "axios";
import { baseURL } from "./config";

export const getIdActividades = (id) =>
  axios
    .get(`${baseURL}/pertenece`, { params: { id } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

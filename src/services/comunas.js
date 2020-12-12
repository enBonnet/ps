import axios from "axios";
import { baseURL } from "./config";

export const getComunas = (id) =>
  axios
    .get(`${baseURL}/comunas`, { params: { id } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

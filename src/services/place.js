import axios from "axios";
import { baseURL } from "./config";

export const getLugar = (id) =>
  axios
    .get(`${baseURL}/lugares`, { params: { id } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

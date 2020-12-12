import axios from "axios";
import { baseURL } from "./config";

export const postReserva = (companions, rutLogin) =>
  axios
    .post(`${baseURL}/reserva`, { companions, rutLogin })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

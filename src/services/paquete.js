import axios from "axios";
import { baseURL } from "./config";

export const postPaquete = (dias, precio, idsActividadList) =>
  axios
    .post(`${baseURL}/paquete`, { precio, dias, idsActividadList })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

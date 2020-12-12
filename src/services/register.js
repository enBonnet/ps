import axios from "axios";
import { baseURL } from "./config";

export const postRegister = (
  rutClient,
  nameClient,
  fatherLastName,
  motherLastName,
  passwordClient,
  ageClient
) =>
  axios
    .post(`${baseURL}/userRegister`, {
      rut: rutClient,
      name: nameClient,
      appat: fatherLastName,
      apmat: motherLastName,
      password: passwordClient,
      edad: ageClient,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

import axios from "axios";
import { baseURL } from "./config";

const response = {
  data: [
    {
      idREGION: 1,
      nombre: "Región de Arica y Parinacota",
    },
    {
      idREGION: 2,
      nombre: "Región de Tarapacá",
    },
    {
      idREGION: 3,
      nombre: "Región de Antofagasta",
    },
    {
      idREGION: 4,
      nombre: "Región de Atacama",
    },
    {
      idREGION: 5,
      nombre: "Región de Coquimbo",
    },
    {
      idREGION: 6,
      nombre: "Región de Valparaíso",
    },
    {
      idREGION: 7,
      nombre: "Región Metropolitana de Santiago",
    },
    {
      idREGION: 8,
      nombre: "Región Libertador General Bernardo O´Higgins",
    },
    {
      idREGION: 9,
      nombre: "Región del Maule",
    },
    {
      idREGION: 10,
      nombre: "Región de Ñuble",
    },
    {
      idREGION: 11,
      nombre: "Región Biobío",
    },
    {
      idREGION: 12,
      nombre: "Región de La Araucanía",
    },
    {
      idREGION: 13,
      nombre: "Región de Los Ríos",
    },
    {
      idREGION: 14,
      nombre: "Región de Los Lagos",
    },
    {
      idREGION: 15,
      nombre: "Región de Aysén",
    },
    {
      idREGION: 16,
      nombre: "Región de Magallanes y Antártica",
    },
  ],
};

export const getRegiones = async () => {
  return response;
  axios
    .get(`${baseURL}/regiones`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/products", // Agregar URL que sea igual con la del backend
});

export default api;

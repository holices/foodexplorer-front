import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-k5x3.onrender.com"
});
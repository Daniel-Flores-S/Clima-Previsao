import axios from "axios";

const url = "http://api.openweathermap.org/data/2.5";

export const ApiService = axios.create({
    baseURL: url,

    headers: {
        "Content-Type": "application/json",
    },
});

import { ApiService } from "data/services/Api.Service";
import { Root } from "data/types/weather";

import { useToken } from "./useToken";

export function useWeather() {
    const { addWeather } = useToken();

    async function getWeather(lat: number, lon: number) {
        const response = await ApiService.get<Root>("/weather", {
            params: {
                lat: lat,
                lon: lon,
                appid: process.env.REACT_APP_WEATHER,
                lang: "pt",
                units: "metric",
            },
        });
        addWeather(response.data);
    }

    async function searchCity(city: string) {
        const response = await ApiService.get<Root>("/weather", {
            params: {
                q: city + ",br",
                appid: process.env.REACT_APP_WEATHER,
                lang: "pt",
                units: "metric",
            },
        });

        addWeather(response.data);
    }

    return {
        getWeather,
        searchCity,
    };
}

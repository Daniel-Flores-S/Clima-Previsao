import axios from "axios";
import { ApiService } from "data/services/Api.Service";
import { Root, Coord, Weather, Main, Wind, Sys } from "data/types/weather";
import { useState } from "react";

export function useWeather() {
    const [weather, setWeather] = useState<Weather>(),
        [coord, setCoord] = useState<Coord>(),
        [main, setMain] = useState<Main>(),
        [wind, setWind] = useState<Wind>(),
        [sys, setSys] = useState<Sys>();

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

        setWeather(response.data.weather[0]);
        setCoord(response.data.coord);
        setMain(response.data.main);
        setWind(response.data.wind);
        setSys(response.data.sys);
    }

    return {
        weather,
        coord,
        main,
        wind,
        sys,
        getWeather,
    };
}

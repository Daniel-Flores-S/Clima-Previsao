import { Fragment, useEffect, useState } from "react";

import { HomeContainer, } from "./styles";
import { useWeather } from "data/hooks/useWeather.Page";

export function Home() {
    const { weather, coord, main, wind, sys, getWeather } = useWeather();

    const [location, setLocation] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        });
    }, []);
    return (
        <>
            <HomeContainer>
                <Fragment>
                    <h3>Clima tempo </h3>
                    <hr />
                    <ul>
                        <li>{main?.feels_like}</li>
                        <li>{main?.humidity}</li>
                        <li>{main?.pressure}</li>
                        <li>{main?.humidity}</li>
                        <li>{main?.sea_level}</li>
                        <li>{main?.temp}</li>
                        <li>{main?.temp_max}</li>
                        <li>{main?.temp_min}</li>
                        <li>Temperatura atual: </li>
                        <li>Temperatura máxima: x</li>
                        <li>Temperatura mínima: x</li>

                        <li>Umidade: x</li>
                        <li>Pressão: x {weather?.description}</li>
                    </ul>
                    <button
                        onClick={() => {
                            alert(weather?.description);
                        }}
                    >
                        Click
                    </button>
                </Fragment>
            </HomeContainer>
        </>
    );
}
/*
let getWeather = async (lat: number, lon: number) => {
        let res: Root = await axios.get(
            "http://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: process.env.REACT_APP_WEATHER,
                    lang: "pt",
                    units: "metric",
                },
            }
        );

        setWeather(res.weather[0]);
    };
<Fragment>
                    <h3>Clima tempo </h3>
                    <hr />
                    <ul>
                        <li>{main?.feels_like}</li>
                        <li>{main?.humidity}</li>
                        <li>{main?.pressure}</li>
                        <li>{main?.humidity}</li>
                        <li>{main?.sea_level}</li>
                        <li>{main?.temp}</li>
                        <li>{main?.temp_max}</li>
                        <li>{main?.temp_min}</li>
                        <li>Temperatura atual: </li>
                        <li>Temperatura máxima: x</li>
                        <li>Temperatura mínima: x</li>

                        <li>Umidade: x</li>
                        <li>Pressão: x {weather?.description}</li>
                    </ul>
                    <button
                        onClick={() => {
                            alert(weather?.description);
                        }}
                    >
                        Click
                    </button>
                </Fragment>
    */

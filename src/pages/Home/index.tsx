import { useEffect } from "react";

import { HomeContainer, Container } from "./styles";
import { useWeather } from "data/hooks/useWeather.Page";
import { NavBarComponent } from "components/NavBar";
import { Card } from "components/Card";
import { SearchBar } from "components/SearchBar";
import { useToken } from "data/hooks/useToken";

export function Home() {
    const { weather } = useToken();

    const { getWeather } = useWeather();


    function mps(mps: any) {
        const n = 3.6 * mps;
        return n.toFixed(0);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
        });
    }, []);
    return (
        <>
            <HomeContainer>
                <NavBarComponent />

                <Container>
                    <SearchBar />
                    <Card
                        temperatura={weather?.main.temp.toFixed(0)}
                        ceu={weather?.weather[0].description}
                        tem_max={weather?.main.temp_max}
                        tem_min={weather?.main.temp_min}
                        umidade={weather?.main.humidity}
                        vento_max={mps(weather?.wind.speed)}
                        cidade={weather?.name}
                        chuva_pt={weather?.clouds.all}
                    />
                </Container>
            </HomeContainer>
        </>
    );
}

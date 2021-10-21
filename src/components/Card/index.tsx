import {
    CardMain,
    CardTitleRight,
    ListContainer,
    Main,
    Price,
    WeatherItem,
    WeatherList,
} from "./styles";

import d from "assets/clouds/rain_s_cloudy.png";

import rowmin from "assets/clouds/ic-arrow-min.svg";
import rowmax from "assets/clouds/ic-arrow-max.svg";
import gota from "assets/clouds/gota-azul.png";

type CardProps = {
    ceu?: string;
    cidade?: string | undefined;
    temperatura?: string;
    tem_max?: string | number;
    tem_min?: string | number;
    vento_max?: string;
    umidade?: number;
    chuva?: number;
    chuva_pt?: number;
};

export const Card = (props: CardProps) => {


    return (
        <Main>
            <CardMain>
                <CardTitleRight>
                    <h1>
                        {props.cidade} Céu {props.ceu}
                    </h1>
                    <p>
                        <img src={d} alt="temperatura" />
                        <Price>{props.temperatura}°</Price>
                    </p>
                </CardTitleRight>
            </CardMain>

            <ListContainer>
                <WeatherList>
                    <WeatherItem>
                        <span>Temperatura</span>
                        <div>
                            <p>
                                <img src={rowmin} alt="Temperatura mínima" />
                                <span>{props.tem_min}°</span>
                                <img src={rowmax} alt="Temperatura max" />
                                <span>{props.tem_max}°</span>
                            </p>
                        </div>
                    </WeatherItem>
                    <WeatherItem>
                        <span>Chuva</span>
                        <div>
                            <p>
                                <div>
                                    <img
                                        src={gota}
                                        width="10"
                                        height="10"
                                        alt="Temperatura mínima"
                                    />
                                    <img
                                        src={gota}
                                        width="10"
                                        height="10"
                                        alt="Temperatura mínima"
                                    />
                                    <img
                                        src={gota}
                                        width="10"
                                        height="10"
                                        alt="Temperatura mínima"
                                    />
                                    <span>{props.chuva_pt + "%"}</span>
                                </div>
                            </p>
                        </div>
                    </WeatherItem>
                    <WeatherItem>
                        <span>Vento</span>

                        <span style={{ transform: "rotate(247.5deg);" }}>
                            ENE - {props.vento_max}km/h
                        </span>
                    </WeatherItem>
                    <WeatherItem>
                        <span>Umidade</span>
                        <div>
                            <p>
                                <img src={rowmin} alt="mínima" />
                                <span>{props.umidade}%</span>
                            </p>
                        </div>
                    </WeatherItem>
                </WeatherList>
            </ListContainer>
        </Main>
    );
};

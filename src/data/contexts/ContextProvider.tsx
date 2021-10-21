import { userInfo } from "data/types/userInfo";
import { Root } from "data/types/weather";

import React, { ReactNode, useState } from "react";
import ContextLogin from "./ContextLogin";

type ContextProps = {
    children: ReactNode | undefined;
};

const ContextProvider = (props: ContextProps) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState<userInfo>();
    const [weather, setWeather] = useState<Root>();

    function addToken(token: string) {
        setToken(token);
    }

    function addUser(user: userInfo) {
        setUser(user);
    }

    function addWeather(weather: Root) {
        setWeather(weather);
    }

    return (
        <ContextLogin.Provider
            value={{ token, addToken, user, addUser, weather , addWeather }}
        >
            {props.children}
        </ContextLogin.Provider>
    );
};

export default ContextProvider;

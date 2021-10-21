import { userInfo } from "data/types/userInfo";
import { Root } from "data/types/weather";
import { createContext } from "react";

type ContextType = {
    token: string;
    addToken: (token: string) => void | undefined;
    user: userInfo | undefined;
    addUser: (user: userInfo) => void | undefined;
    weather: Root | undefined;
    addWeather: (weather: Root) => void | undefined;
};

const ContextLogin = createContext({} as ContextType);

export default ContextLogin;

import ContextProvider from "data/contexts/ContextProvider";
import React from "react";
import { Routes } from "routes/Routes";
import { GlobalStyle } from "styles/global/style";

function App() {
    return (
        <>
            <GlobalStyle />
            <ContextProvider>
                <Routes />
            </ContextProvider>
        </>
    );
}

export default App;

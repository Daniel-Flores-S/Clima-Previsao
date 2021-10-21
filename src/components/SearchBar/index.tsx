import { FormEvent, useState } from "react";

import {
    CastHeader,
    HeaderSubtitle,
    HeaderTitle,
    Search,
    SearchButton,
    SearchTerm,
    Wrap,
} from "./styles";

import { useWeather } from "data/hooks/useWeather.Page";

export const SearchBar = () => {
    const { searchCity } = useWeather();
    const [newCity, setNewCity] = useState("");

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newCity.trim() === "") {
            return;
        } else {
            searchCity(newCity);
        }
    }

    return (
        <Wrap onSubmit={handleCreateRoom}>
            <CastHeader>
                <HeaderTitle>Hoje, quinta-feira</HeaderTitle>
                <HeaderSubtitle>Previsão Pelo Brasil</HeaderSubtitle>
            </CastHeader>
            <Search>
                <SearchTerm
                    placeholder="Encontre a sua cidade"
                    onChange={(event) => setNewCity(event.target.value)}
                    value={newCity}
                />
                <SearchButton type="submit">
                    <i>OK</i>
                </SearchButton>
            </Search>
        </Wrap>
    );
};

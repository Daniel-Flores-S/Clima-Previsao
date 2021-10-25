import styled from "styled-components";

export const Main = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: arial;
    width: 100%;
    max-width: 700px;
`;

export const CardTitle = styled.div`
    background-color: #009ee2;
    display: flex;
    flex-direction: column;
    font-family: arial;
    text-align: center;
    padding: 10px 0 12px 0;
    width: 100%;

    h1 {
        color: white;
    }

    span {
        color: #fff8dc;
        font-size: 1em;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Price = styled.p`
    color: #fff;
    font-size: 25px;
`;

export const ListContainer = styled.main`
    border: none;
    outline: 0;
    padding: 12px;
    text-align: center;
    width: 100%;
    font-size: 18px;
`;

export const WeatherList = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    display: block;
    list-style-type: disc;
`;
export const WeatherItem = styled.li`
    color: #aaa;
    display: flex;
    padding: 10px 0;
    justify-content: space-between;

    span {
        font-size: 1em;
        color: #000 !important;
        margin-right: 0.5em;
    }

    @media (max-width: 450px) {
        display: block;
        margin-top: 2px;
    }
`;

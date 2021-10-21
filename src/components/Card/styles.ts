import styled from "styled-components";

export const Main = styled.div`
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: arial;
    justify-content: center;
    margin: auto;
    width: 50%;

    @media (max-width: 768px) {
        width: 90%;
        
    }

`;

export const CardMain = styled.div`
    background-color: #009ee2;
    display: flex;
    justify-content: center;
    width: 100%;
`;



export const CardTitleRight = styled.p`
    font-family: arial;
    text-align: center;
    padding: 10px 0 12px 0;
    width: 100%;

    h1 {
        color: white;
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
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 2em;
    padding-inline-end: 2em;
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
`;

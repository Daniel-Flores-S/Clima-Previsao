import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;

export const Container = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 850px) {
        padding-top: 10%;
    }

    @media (max-width: 768px) {
        padding-top: 20%;
    }
`;

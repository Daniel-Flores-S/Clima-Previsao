import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const AsideContainer = styled.aside`
    align-items: center;
    background-image: linear-gradient(90deg, #375c71, #66b5ee);
    display: flex;

    flex: 8;
    flex-direction: column;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MainContainer = styled.main`
    flex: 7;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InnerContainer = styled.div`
    align-items: center;
    display: flex;

    border-radius: 10px;
    background: white;
    border-radius: 30px;
    background-repeat: no-repeat;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.562);
    flex-direction: column;

    justify-content: center;
    width: 80%;
    height: 90%;
`;

export const Title = styled.h1`
    display: block;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
`;

export const BtnGM = styled(Link)`
    align-items: center;
    background: #ea4335;
    border-radius: 30px;
    color: white;
    display: flex;
    font-family: Poppins-Bold;
    font-size: 18px;
    height: 40px;
    justify-content: center;
    margin-top: 20px;
    text-decoration: none;
    width: 90%;

    &:hover {
        background: #66b5ee;
    }
`;

export const BtnFC = styled(BtnGM)`
    background-color: #3b5998;
`;

export const BtnGH = styled(BtnGM)`
    background-color: #181f1f;
`;

export const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    text-align: center;
`;

export const Illustration = styled.img`
    width: 70%;
    height: 400px;
    object-fit: fill;
`;

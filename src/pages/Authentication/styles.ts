import styled from "styled-components";
import background from "assets/background/backImag.jpeg";

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    overflow: auto;
    height: 100vh;
    width: 100%;
`;

export const Wrap = styled.div`
    align-items: center;
    background-image: linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%);
    border: 0.4px solid #8fb3f5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    max-width: 500px;
    width: 100%;
`;

export const Title = styled.div`
    color: #000000;
    font-weight: 600;
    font-size: 2.5rem;
    letter-spacing: 0px;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
`;

export const Subtitle = styled.div`
    color: #4b2354;
    font-weight: 300;
    text-align: center;
    line-height: 1em;
    font-weight: 100;
    letter-spacing: 0px;
    letter-spacing: 0.05em;
`;

export const LoginForm = styled.div`
    max-width: 600px;
    width: 95%;
`;

export const Group = styled.div`
    margin-bottom: 20px;
`;

export const Hr = styled.div`
    background: #6d8d99;
    height: 2px;
    margin: 40px 0 40px 0;
    width: 100%;
`;

/*export const LoginHtml = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: rgba(40, 57, 101, 0.9);
`; */

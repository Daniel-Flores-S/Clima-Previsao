import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: auto;

    background: linear-gradient(135deg, #242e4d, #897e79);
`;



export const Title = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: white;
    text-align: center;
    font-size: 40px;
    font-size: 2.5rem;
    letter-spacing: 0px;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Subtitle = styled.div`
    font-family: "Poppins", sans-serif;
    color: white;
    text-align: center;
    line-height: 1em;
    font-weight: 100;
    letter-spacing: 0px;
    letter-spacing: 0.05em;
`;

export const LoginWrap = styled.div`
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 670px;
    position: relative;
    background: url(/src/assets/images/lg-img.jpg) no-repeat center;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;

export const LoginHtml = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: rgba(40, 57, 101, 0.9);
`;

export const LoginForm = styled.div`
    min-height: 345px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
`;

export const Group = styled.div`
    margin-bottom: 20px;
`;

export const Hr = styled.div`
    height: 2px;
    margin: 50px 0 40px 0;
    background: rgba(255, 255, 240, 0.2);
`;

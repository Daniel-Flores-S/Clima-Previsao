import styled from "styled-components";

export const Btn = styled.button`
    border: none;
    border-radius: 15px;
    color: #fff;
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    padding: 15px 15px;
    width: 100%;

    &:hover {
        opacity: 0.8;
    }

    img {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
`;

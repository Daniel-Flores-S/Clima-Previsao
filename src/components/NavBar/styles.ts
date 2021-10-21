import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: #3f5efb;
    position: fixed;
    height: 60px !important;
    overflow: hidden;
    z-index: 10;

    img {
        align-self: center;
        border-radius: 50%;
        height: 70%;

        float: right;
        margin-top: 10px;
        margin-right: 1.5em;
        cursor: pointer;

    }
`;

export const SidebarMenu = styled.ul`
    height: 100%;
    position: fixed;
    left: 0;
    width: 250px;
    margin-top: 60px;
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
    background: linear-gradient(180deg, #3f5efb 0%, #3f5efb 100%);
`;

export const SidebarMenuInner = styled.ul`
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateX(0);

    li {
        list-style: none;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        padding: 20px;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    li span {
        font: 400 14px/19px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        letter-spacing: normal;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    li a {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }
`;

export const InputChecked = styled.input.attrs({ type: "checkbox" })`
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;

    &:checked ~ ${SidebarMenu} {
        transform: translateX(0);
    }
`;

export const SidebarIconToggle = styled.label`
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
`;

export const spinner = styled.div`
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
    transform: translateX(0);
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
`;

export const Horizontal = styled(spinner)`
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
`;

export const DiagonalPart1 = styled(spinner)`
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
`;

export const DiagonalPart2 = styled(spinner)`
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
`;

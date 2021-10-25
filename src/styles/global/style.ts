import { createGlobalStyle, css } from "styled-components";

const Montserrat = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap");
`;

export const GlobalStyle = createGlobalStyle`
 font-family: ${Montserrat};
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

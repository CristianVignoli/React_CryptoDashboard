import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: "#FFF";
    color: "#585280";
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    transition: all 0.25s linear;
  }
`;

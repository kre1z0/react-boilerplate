import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  #root {
    position: relative;
    height: 100vh;
    height: -webkit-fill-available;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  #root {
    position: fixed;
    top: 0;
    bottom: 0;
  }
  a {
    color: blue;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

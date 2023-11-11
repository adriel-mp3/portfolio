import { createGlobalStyle, keyframes } from "styled-components";
import { theme } from "./Theme";

const breathing = keyframes`
  0% {
    box-shadow: 0px 0 300px 150px ${theme.colors["accent-100"]};
  }

  25% {
    box-shadow: 10px 6px 320px 300px ${theme.colors["accent-100"]};
  }

  50% {
    box-shadow: -10px -6px 340px 350px ${theme.colors["accent-100"]};
  }
  75% {
    box-shadow: -20px 6px 335px 200px ${theme.colors["accent-100"]};
  }
  100% {
    box-shadow: -6px 2px 320px 150px ${theme.colors["accent-100"]};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    background: ${({ theme }) => theme.colors.background};
    font-family: "Fira Sans"; 
  }

  button, a {
    &:focus {
      outline-color: ${({ theme }) => theme.colors["accent-200"]};
      outline-offset: 4px;
      transition: none;
    }
  }

  body::before {
    content: '';
    border-radius: 50%;
    z-index: -1;
    position: fixed;
    width: 600px;
    height: 600px;
    left: -300px;
    transform: translate(-50%, -50%);
    animation: ${breathing} 15s infinite ease;
    will-change: box-shadow;
    opacity: 0.6;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, 
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

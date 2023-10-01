import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background: ${({ theme }) => theme.colors.background};
  font-family: "Fira Sans";
}

body::before {
  z-index: -1;
  filter:${({ theme }) =>
    `drop-shadow(20px -20px 10px ${theme.colors["accent-100"]}) blur(300px)`} ;
  display: block;
  content: '';
  position: fixed;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.colors["accent-100"]};
  top: 200px;
  left: -200px;
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

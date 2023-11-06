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
  border-radius:50%;
  box-shadow: 0 0 300px 150px ${({ theme }) => theme.colors["accent-100"]};
  content: '';
  position: fixed;
  width: 500px;
  height: 500px;
  background: transparent;
  left: -250px;
  transform: translate(-50%, -50%)
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

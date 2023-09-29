import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background: ${({ theme }) => theme.colors.background};
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

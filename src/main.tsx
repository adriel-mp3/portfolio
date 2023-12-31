import React from "react";

import ReactDOM from "react-dom/client";

import { GlobalStyle } from "@/styles/globalStyles.ts";
import { Theme } from "@/styles/Theme.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App />
      <GlobalStyle />
    </Theme>
  </React.StrictMode>
);

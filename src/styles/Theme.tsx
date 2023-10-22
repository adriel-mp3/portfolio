import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const theme = {
  colors: {
    background: "#191919",
    "neutral-100": "#ffffff",
    "neutral-200": "#f2fdff",
    "neutral-300": "#e9f3f5",
    "neutral-400": "#d3dee0",
    "neutral-500": "#aab1b3",
    "accent-100": "#005466",
    "accent-200": "#118ba6",
    "accent-300": "#2bbad9",
    "accent-400": "#3ccbeb",
    "accent-500": "#3fd3f3",
  },
  fontSizes: {
    xs: ".75rem",
    sm: "1rem",
    base: "1.25rem",
    lg: "1.5rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "7.5rem",
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    extraBold: 800,
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "4rem",
    "4xl": "7.5rem",
  },
} as const;

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

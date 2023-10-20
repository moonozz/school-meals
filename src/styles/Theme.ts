import { DefaultTheme } from "styled-components";

const display = {
  mobile: "561px",
  tablet: "769px",
  desktop: "1025px",
};

const color = {
  white: "#fff",
  black: "#000",
  main: "#FFCE6B",
  lightMain: "#F5EDE2",
  orange: "FF6D3B",
  gray100: "#9B9B9B",
  gray150: "#505050",
};

const fontSize = {
  xs: "1.4rem",
  s: "1.6rem",
  r: "1.8rem",
  m: "2rem",
  l: "2.4rem",
};

export type ColorsTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type DisplayTypes = typeof display;

const theme: DefaultTheme = {
  color,
  fontSize,
  display,
  mobile: `(min-width: ${display.mobile})`,
  tablet: `(min-width: ${display.tablet})`,
  desktop: `(min-width: ${display.desktop})`,
};

export default theme;

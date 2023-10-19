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
  Orange: "FF6D3B",
  gray100: "#9B9B9B",
  gray150: "#505050",
};

const fontSize = {
  xs: "1.2rem",
  s: "1.3rem",
  r: "1.4rem",
  m: "1.6rem",
  l: "2.4rem",
  xl: "4rem",
};

const theme = {
  color,
  fontSize,
  display,
  mobile: `(min-width: ${display.mobile})`,
  tablet: `(min-width: ${display.tablet})`,
  desktop: `(min-width: ${display.desktop})`,
};

export default theme;

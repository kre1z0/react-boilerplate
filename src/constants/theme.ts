export const THEME = {
  font: "Roboto, sans-serif",
  colors: {
    white: "rgb(255, 255, 255)",
    green: "rgb(31, 179, 170)",
    normalGray: "rgba(48, 69, 79, 0.54)",
    lightGray: "rgba(48, 69, 79, 0.28)",
  },
  shadow: "0 0.1875rem 0.5rem rgba(48, 69, 79, 0.06)",
  transitions: {
    hover: "150ms cubic-bezier(0.2, 1, 0.6, 1)",
    press: "100ms cubic-bezier(0.2, 1, 0.6, 1)",
    release: "200ms cubic-bezier(0.2, 1, 0.6, 1)",
  },
} as const;

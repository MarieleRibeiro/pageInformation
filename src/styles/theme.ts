const theme = {
  title: "default",
  colors: {
    white: "#FFFFFF",
    white100: "#f2f2f2",
    gray200: "#5F658B",
    blue: "#151E4B",
    blue100: "#232846",
    blue200: "#1B2455",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;

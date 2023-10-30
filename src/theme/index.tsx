const darktheme = {
  primary: "#00bcd4",
  secondary: "#f3f3f3",
  border: "#e0e0e0",
  text: "#fff",
  background:
    "linear-gradient(36deg, rgba(0,0,0,1) 0%, rgba(32,45,57,1) 32%, rgba(32,45,57,1) 63%, rgba(0,0,0,1) 100%)",
  indicator: "#FFCC00",
};

const lightTheme = {
  primary: "#003366",
  secondary: "#eee",
  border: "#878787",
  text: "#000",
  background: "#fff",
  indicator: "#ccc",
};

const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  padding: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%",
  },
};

const theme = {
  dark: {
    ...defaultTheme,
    color: darktheme,
  },
  light: { ...defaultTheme, color: lightTheme },
};

export default theme;

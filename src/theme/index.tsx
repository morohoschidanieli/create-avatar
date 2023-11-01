const darktheme = {
  primary: "rgba(164, 178, 193, 0.15)",
  secondary: "rgba(164, 178, 193, 0.15)",
  shapeColor: "#2c323a",
  shapeColorActive: "#44484c",
  border: "#1d2227",
  text: "#fff",
  sidebarButtonColor: "#ffffff",
  sidebarBackgroundColorMobile: "#1f2329",
  background:
    "linear-gradient(36deg, rgba(0,0,0,1) 0%, rgba(32,45,57,1) 32%, rgba(32,45,57,1) 63%, rgba(0,0,0,1) 100%)",
  indicator: "#FFCC00",
};

const lightTheme = {
  primary: "rgba(150, 170, 190, 1)",
  secondary: "#ffffff",
  shapeColor: "#f4e3d7",
  shapeColorActive: "rgba(150, 170, 190, 1)",
  border: "#878787",
  text: "#44484c",
  sidebarButtonColor: "rgba(150, 170, 190, 1)",
  sidebarBackgroundColorMobile: "rgb(255,247,235,1)",
  background:
    "linear-gradient(36deg, rgba(255,247,235,1) 0%, rgba(245,232,215,1) 32%, rgba(245,232,215,1) 63%, rgba(255,247,235,1) 100%)",
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
    changeThemeIcon: "🌕",
  },
  light: { ...defaultTheme, color: lightTheme, changeThemeIcon: "🌑" },
};

export default theme;

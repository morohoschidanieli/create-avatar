export interface DefaultThemeInterface {
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    circle: string;
  };
}

export interface SelectedThemeInterface {
  primary: string;
  secondary: string;
  border: string;
  text: string;
  background: string;
  indicator: string;
}

export interface ThemeInterface
  extends DefaultThemeInterface,
    SelectedThemeInterface {}

export type Theme = "light" | "dark";

import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Theme } from "./interfaces/theme";
import Avatar from "./components/Avatar";
import Sidebar from "./components/Sidebar";
import { AppLayout } from "./styles/app";
import * as React from "react";
import { AvatarValues } from "./interfaces/avatar";
import { MouthType } from "./interfaces/mouth";
import { EyeType } from "./interfaces/eye";

export const AvatarContext = React.createContext<AvatarValues | null>(null);

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  const defaultAvatarValues = {
    wrapperShape: "square",
    background: { color: "#ffffff" },
    widgets: {
      skin: {
        shape: "base",
        fillColor: "#ff0000",
      },
      head: {
        shape: "hihay",
        fillColor: "#ff0000",
      },
      eyes: {
        shape: "apathetic" as EyeType,
      },
      mouth: {
        shape: "confused" as MouthType,
      },
      clothes: {
        shape: "clothes",
        color: "#00ff00",
      },
    },
  };

  const changeTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <AvatarContext.Provider value={defaultAvatarValues}>
          <AppLayout>
            <Avatar />
            <Sidebar />
          </AppLayout>
        </AvatarContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

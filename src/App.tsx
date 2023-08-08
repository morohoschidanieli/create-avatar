import { Dispatch, SetStateAction, useState } from "react";
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

const avatarDataInitialValue: AvatarValues = {
  wrapperShape: "circle",
  background: { color: "#FF8F7A" },
  widgets: {
    skin: {
      shape: "base",
      fillColor: "#F8C9B6",
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

export const AvatarContext = React.createContext<
  null | [AvatarValues, Dispatch<SetStateAction<AvatarValues>>]
>(null);

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [avatarData, setAvatarData] = useState<AvatarValues>(
    avatarDataInitialValue
  );

  console.log(avatarData);
  // const changeTheme = () => {
  //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  // };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <AvatarContext.Provider value={[avatarData, setAvatarData]}>
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

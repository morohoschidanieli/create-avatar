import * as React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Avatar, Sidebar } from "@ui";
import { AvatarContext, avatarDataInitialValue } from "@context";
import { Theme } from "types/theme";
import { AvatarValues } from "@interfaces/avatar";
import GlobalStyle from "@styles/globalStyles";
import { AppLayout } from "@styles/app";
import theme from "@theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [avatarData, setAvatarData] = useState<AvatarValues>(
    avatarDataInitialValue
  );

  const selectThemeHandler = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <AvatarContext.Provider value={[avatarData, setAvatarData]}>
        <AppLayout>
          <Avatar onSelectTheme={selectThemeHandler} />
          <Sidebar />
        </AppLayout>
      </AvatarContext.Provider>
    </ThemeProvider>
  );
}

export default App;

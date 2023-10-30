import * as React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Avatar, Sidebar } from "@components";
import { AvatarContext, avatarDataInitialValue } from "@context";
import { Theme } from "@interfaces/theme";
import { AvatarValues } from "@interfaces/avatar";
import GlobalStyle from "@styles/globalStyles";
import { AppLayout } from "@styles/app";
import theme from "@theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [avatarData, setAvatarData] = useState<AvatarValues>(
    avatarDataInitialValue
  );
  console.log(setCurrentTheme);
  // const changeTheme = () => {
  //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  // };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <AvatarContext.Provider value={[avatarData, setAvatarData]}>
        <AppLayout>
          {/* <Code /> */}
          <Avatar />
          <Sidebar />
        </AppLayout>
      </AvatarContext.Provider>
    </ThemeProvider>
  );
}

export default App;

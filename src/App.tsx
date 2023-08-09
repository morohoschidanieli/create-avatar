/* React */
import * as React from "react";
import { useState } from "react";

/* Global style */
import GlobalStyle from "./styles/globalStyles";

/* Styles */
import { AppLayout } from "./styles/app";

/* Theme Provider */
import { ThemeProvider } from "styled-components";
import theme from "./theme";

/* Components */
import Avatar from "./components/Avatar";
import Sidebar from "./components/Sidebar";
import Code from "./components/Code";

/* Interfaces */
import { Theme } from "./interfaces/theme";
import { AvatarValues } from "./interfaces/avatar";

/* Context */
import { AvatarContext } from "./context/AvatarContext";
import { avatarDataInitialValue } from "./context/initialValues";

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

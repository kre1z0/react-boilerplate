import React, { FC, ReactElement, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Main } from "./styled";
import { Menu } from "components/Menu";

import { THEME } from "constants/theme";

export const Layout: FC = ({ children }): ReactElement => {
  const [isDarkTheme, setTheme] = useState(false);

  return (
    <ThemeProvider
      theme={
        isDarkTheme
          ? {
              colors: {
                white: "rgb(255, 255, 255)",
                green: "rgb(31, 179, 170)",
                normalGray: "green",
                lightGray: "rgba(48, 69, 79, 0.28)",
                mainGray: "rgb(48, 69, 79)",
              },
            }
          : THEME
      }
    >
      <Menu />
      <input type="checkbox" onChange={() => setTheme(!isDarkTheme)} />
      theme
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

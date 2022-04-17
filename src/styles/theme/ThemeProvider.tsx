import React, { ReactChild, Children } from "react";
import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { useThemeSlice } from "slices/theme";
import { selectTheme } from "slices/theme/selectors";

export const ThemeProvider = (props: { children: ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>{Children.only(props.children)}</OriginalThemeProvider>
  );
};

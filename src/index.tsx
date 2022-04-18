import "react-app-polyfill/stable";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import FontFaceObserver from "fontfaceobserver";

import "sanitize.css";

import { ErrorBoundary } from "components";
import { GlobalStyle } from "styles/global-styles";
import { ThemeProvider } from "styles/theme/ThemeProvider";
import { Routes } from "routes";

import { fontLoaded } from "constants/common";

import { store } from "store";

import "locales/i18n";

const conteiner = document.getElementById("root");

const openSansObserver = new FontFaceObserver("Open Sans", {});

openSansObserver.load().then(() => {
  document.body.classList.add(fontLoaded);
});

if (conteiner) {
  const root = createRoot(conteiner);

  root.render(
    <Provider store={store}>
      <ThemeProvider>
        <StrictMode>
          <GlobalStyle />
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </StrictMode>
      </ThemeProvider>
    </Provider>,
  );
} else {
  console.error("Root element not found");
}

if (module.hot) {
  module.hot.accept(["./locales/i18n"]);
}

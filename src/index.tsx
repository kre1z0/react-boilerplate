import "react-app-polyfill/stable";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "sanitize.css";

import { Layout, ErrorBoundary } from "components";
import { IndexPage, SwaggerPage } from "pages";
import { GlobalStyle } from "styles/global-styles";
import { ThemeProvider } from "styles/theme/ThemeProvider";

import { ROUTES } from "constants/routes";

import { store } from "store";
import { routerBasename } from "utils/window";

import "locales/i18n";

const conteiner = document.getElementById("root");

if (conteiner) {
  const root = createRoot(conteiner);

  root.render(
    <Provider store={store}>
      <ThemeProvider>
        <>
          <GlobalStyle />
          <Router basename={routerBasename}>
            <StrictMode>
              <ErrorBoundary>
                <Layout>
                  <Routes>
                    <Route path={ROUTES.Index} element={<IndexPage />} />
                    <Route path={ROUTES.Swagger} element={<SwaggerPage />} />
                  </Routes>
                </Layout>
              </ErrorBoundary>
            </StrictMode>
          </Router>
        </>
      </ThemeProvider>
    </Provider>,
  );
} else {
  console.error("Root element not found");
}

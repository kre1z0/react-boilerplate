import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout, ErrorBoundary } from "components";
import { DebugPage } from "pages";
import { GlobalStyle } from "styles/global-styles";
import { ThemeProvider } from "styles/theme/ThemeProvider";

import { ROUTES } from "constants/routes";

import { store } from "store";
import { routerBasename } from "utils/window";

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
                    <Route path={ROUTES.Main} element={<DebugPage />} />
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

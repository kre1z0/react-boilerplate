import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { THEME } from "constants/theme";

import { Root, Layout, ErrorBoundary, GlobalStyles } from "components";
import { DebugPage } from "pages";

const conteiner = document.getElementById("root");

if (conteiner) {
  const root = createRoot(conteiner);

  root.render(
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Router>
        <ErrorBoundary>
          <Root>
            <Layout>
              <Routes>
                <Route path="/" element={<DebugPage />} />
              </Routes>
            </Layout>
          </Root>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>,
  );
} else {
  console.error("Root element not found");
}

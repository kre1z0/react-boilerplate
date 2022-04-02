import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Root, Layout, ErrorBoundary, GlobalStyles } from "components";
import { DebugPage } from "pages";

const conteiner = document.getElementById("root");

if (conteiner) {
  const root = createRoot(conteiner);

  root.render(
    <>
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
    </>,
  );
} else {
  console.error("Root element not found");
}

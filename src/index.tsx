import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "components/Layout";
import { ErrorBoundary } from "components/ErrorBoundary";
import { GlobalStyles } from "components/GlobalStyles";

import { Root } from "components/Root";

const rootElement = document.getElementById("root");

render(
  <>
    <GlobalStyles />
    <Router>
      <ErrorBoundary>
        <Root>
          <Layout>
            <Routes>
              <Route path="/" element={<div>Hello world!</div>} />
            </Routes>
          </Layout>
        </Root>
      </ErrorBoundary>
    </Router>
  </>,
  rootElement,
);

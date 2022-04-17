import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from "react-router-dom";

import { Layout } from "components";
import { IndexPage, SwaggerPage } from "pages";

import { ROUTES } from "constants/routes";

import { routerBasename } from "utils/window";

export const Routes: FC<{}> = (): ReactElement => (
  <Router basename={routerBasename}>
    <Layout>
      <ReactRoutes>
        <Route path={ROUTES.Index} element={<IndexPage />} />
        <Route path={ROUTES.Swagger} element={<SwaggerPage />} />
      </ReactRoutes>
    </Layout>
  </Router>
);

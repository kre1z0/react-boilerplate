import React from "react";

import { LoadingIndicator } from "ui";
import { LoadingWrapper } from "./styled";

import { lazyLoad } from "utils/loadable";

export const NotFoundPage = lazyLoad(
  () => import("./Page"),
  (module) => module.NotFoundPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);

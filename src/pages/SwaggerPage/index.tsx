import React from "react";

import { LoadingIndicator } from "ui";
import { LoadingWrapper } from "./styled";

import { lazyLoad } from "utils/loadable";

export const SwaggerPage = lazyLoad(
  () => import("./Page"),
  (module) => module.SwaggerPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);

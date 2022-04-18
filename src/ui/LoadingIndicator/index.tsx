import React, { FC } from "react";

import { Svg, Circle } from "./styled";

import { LoadingIndicatorProps } from "./types";

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({ small }) => (
  <Svg viewBox="-24 -24 48 48" small={small}>
    <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></Circle>
  </Svg>
);

import styled from "styled-components";

import { IconProps } from "./types";

export const Icon = styled.i<Partial<IconProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-style: normal;
  padding-left: 0.5rem;
`;

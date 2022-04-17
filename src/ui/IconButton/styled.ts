import styled from "styled-components";

import { Icon } from "../Icon/styled";

import { IconButtonProps } from "./types";

export const IconButtonContainer = styled.span`
  display: flex;
  font-size: 0.875rem;
`;

export const IconButton = styled.span<Pick<IconButtonProps, "disabled">>`
  display: inline-flex;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  pointer-events: ${({ disabled }) => disabled && "none"};

  ${Icon} {
    color: ${({ disabled, theme }) => {
      return !disabled ? theme.text : theme.primary;
    }};

    &:hover,
    &:active {
      color: ${({ disabled, theme }) => {
        return !disabled ? theme.text : theme.primary;
      }};
    }
  }
`;

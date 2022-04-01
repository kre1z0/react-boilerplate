import styled from "styled-components";

import { Icon } from "../Icon/styled";

import { IconButtonProps } from "./types";

export const IconButtonContainer = styled.span`
  display: flex;
  font-size: 0.875rem;
`;

export const IconButton = styled.span<Pick<IconButtonProps, "disabled" | "darkTheme">>`
  display: inline-flex;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  pointer-events: ${({ disabled }) => disabled && "none"};

  ${Icon} {
    color: ${({ disabled, darkTheme, theme }) => {
      return !disabled ? (darkTheme ? theme.colors.white : theme.colors.normalGray) : theme.colors.lightGray;
    }};

    &:hover,
    &:active {
      color: ${({ disabled, darkTheme, theme }) => {
        return !disabled ? (darkTheme ? theme.colors.green : theme.colors.mainGray) : theme.colors.lightGray;
      }};
    }
  }
`;

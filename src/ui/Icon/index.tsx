import React, { FC, ReactElement } from "react";
import IcoMoon from "react-icomoon";

import { Icon as IconContainer, Label } from "./styled";

import { IconProps } from "./types";

import iconSet from "assets/selection.json";

export const Icon: FC<IconProps> = ({ onClick, label, title, type, size, style, ...rest }): ReactElement => (
  <IconContainer
    style={{ ...style, cursor: typeof onClick === "function" ? "pointer" : "inherit" }}
    onClick={onClick}
    title={title}
  >
    <IcoMoon iconSet={iconSet} icon={type} size={size || "1rem"} {...rest} />
    {label && <Label>{label}</Label>}
  </IconContainer>
);

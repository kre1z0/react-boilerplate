import React from "react";

import { Icon } from "../Icon";
import { IconButtonContainer, IconButton as StyledIconButton } from "./styled";

import { IconButtonProps } from "./types";

const IconButton: React.FC<IconButtonProps> = (props): React.ReactElement => {
  const { disabled, className, title, darkTheme, ...rest } = props;

  return (
    <IconButtonContainer title={title}>
      <StyledIconButton disabled={disabled} className={className} darkTheme={darkTheme}>
        <Icon {...rest} />
      </StyledIconButton>
    </IconButtonContainer>
  );
};

export { IconButton };

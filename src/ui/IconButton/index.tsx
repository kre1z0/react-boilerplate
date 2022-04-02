import React from "react";

import { Icon } from "../Icon";
import { IconButtonContainer, IconButton as StyledIconButton } from "./styled";

import { IconButtonProps } from "./types";

const IconButton: React.FC<IconButtonProps> = (props): React.ReactElement => {
  const { disabled, className, title, ...rest } = props;

  return (
    <IconButtonContainer title={title}>
      <StyledIconButton disabled={disabled} className={className}>
        <Icon {...rest} />
      </StyledIconButton>
    </IconButtonContainer>
  );
};

export { IconButton };

import React, { memo } from "react";

import { Wrapper } from "./styled";

import { RadioProps } from "./types";

export const Radio = memo(({ id, label, className, isSelected, ...props }: RadioProps) => {
  return (
    <Wrapper className={className}>
      <input type="radio" id={id} checked={isSelected} {...props} />
      <label htmlFor={id}>{label}</label>
    </Wrapper>
  );
});

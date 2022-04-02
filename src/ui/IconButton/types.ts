import { ReactNode } from "react";

import { IconProps } from "../Icon/types";

export type IconButtonProps = IconProps & {
  className?: string;
  disabled?: boolean;
  label?: ReactNode;
};

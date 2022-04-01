import { CSSProperties, MouseEvent, ReactNode } from "react";

type Icon = {
  defaultCode: number;
  grid: number;
  isMulticolor: boolean;
  isMulticolor2: boolean;
  paths: string[];
  tags: string[];
};

type Icons = {
  icon: Icon;
  iconIdx: number;
  properties: {
    code: number;
    id: number;
    name: string;
    order: number;
    prevSize: number;
  };
  setId: number;
  setIdx: number;
};

type IconSet = {
  IcoMoonType: string;
  height: number;
  icons: Icons[];
  metadata: {
    name: string;
  };
};

export interface IconProps {
  iconSet?: IconSet;
  type: string;
  size?: number | string;
  color?: string;
  style?: CSSProperties;
  className?: string;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  onClick?: (event?: MouseEvent) => void;
  title?: string;
  label?: ReactNode;
}

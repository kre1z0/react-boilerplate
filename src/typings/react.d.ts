import { CSSProperties } from "react";

declare module "react" {
  interface Attributes {
    style?: CSSProperties;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
  }
}

import React, { FC, ReactElement, PropsWithChildren } from "react";

import { Main } from "./styled";
import { Menu } from "components/Menu";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }): ReactElement => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
    </>
  );
};

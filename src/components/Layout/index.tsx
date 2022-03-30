import React, { FC, ReactElement } from "react";

import { Main } from "./styled";

export const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      header
      <Main>{children}</Main>
    </>
  );
};

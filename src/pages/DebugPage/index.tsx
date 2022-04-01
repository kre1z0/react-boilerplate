import React, { FC, ReactElement } from "react";

import { Icon, IconButton } from "ui";

export const DebugPage: FC = (): ReactElement => {
  return (
    <>
      <Icon size={44} type="home" />
      <IconButton size={144} type="home" color="green" />
    </>
  );
};

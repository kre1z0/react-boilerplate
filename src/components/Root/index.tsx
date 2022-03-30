import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";

import { store } from "ducks/store";

export const Root: FC = ({ children }): ReactElement => (
  <Provider store={store}>
    {children}
  </Provider>
);

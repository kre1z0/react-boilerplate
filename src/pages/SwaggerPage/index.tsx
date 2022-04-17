import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useStoreSlice } from "./slice/useStoreSlice";

export const SwaggerPage: FC<{}> = (): ReactElement => {
  const { actions } = useStoreSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    console.info("--> ggwp 4444 ALL");
    dispatch(actions.loadStore());
  }, []);

  return <div>SwaggerPage</div>;
};

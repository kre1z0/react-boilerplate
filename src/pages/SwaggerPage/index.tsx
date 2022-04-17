import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useStoreSlice } from "slices/store/useStoreSlice";
import { selectData } from "slices/store/selectors";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatJSON = (data: any, ellipsis = true) => {
  const string = JSON.stringify(data, null, 4);

  if (!ellipsis) {
    return string;
  }

  return `${string.slice(0, string.length - 2)},\n ...${string.slice(string.length - 2)}`;
};

export const SwaggerPage: FC<{}> = (): ReactElement => {
  const data = useSelector(selectData);
  const { actions } = useStoreSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadStore());
  }, []);

  return (
    <div>
      SwaggerPage
      <br />
      <code>{formatJSON(data)}</code>
    </div>
  );
};

import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";

export const NotFoundPage: FC<{}> = (): ReactElement => {
  return (
    <div>
      <h1>Page not found.</h1>
      <Link to={ROUTES.Index}>Return to Home Page</Link>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "styles";
import { Component } from "components/Component";

export const App = () => (
  <>
    <GlobalStyle />
    <Component />
  </>
);

ReactDOM.render(<App />, document.getElementById("container"));

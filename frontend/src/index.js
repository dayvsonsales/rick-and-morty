import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

import GlobalStyle from "./styles/global";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Home />
  </>,
  document.getElementById("root")
);

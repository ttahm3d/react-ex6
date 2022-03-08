import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./ProductsContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>,
  rootElement
);

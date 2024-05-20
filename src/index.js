import React from "react";
import ReactDOM from "react-dom";
import { MainContext } from "./components/context";
import "./index.css";
import Root from "./root";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <Root />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);

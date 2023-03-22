import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const myFirstElement = <h1>Hello React!</h1>;

const root = ReactDOM.hydrateRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles.css";

const domTarget = document.querySelector("#lernplattform-app");

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  domTarget
);

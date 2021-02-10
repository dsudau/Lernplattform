import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const domTarget = document.querySelector("#lernplattform-app");
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  domTarget
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/General.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/ebs_test_project">
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

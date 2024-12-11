// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

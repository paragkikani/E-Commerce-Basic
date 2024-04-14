import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminSetup from "./AdminSetup";
import ProductShowPage from "./ProductShowPage";
import PageNotFound from "./PageNotFound";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element=<AdminSetup /> />
      </Routes>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="*" element=<PageNotFound /> />
        <Route path="/product/:productId" element=<ProductShowPage /> />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;

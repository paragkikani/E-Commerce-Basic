import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminSetup from "../Components/AdminSetup";
import ProductShowPage from "./ProductShowPage";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/product" element=<ProductShowPage /> />
      </Routes>
      <Routes>
        <Route path="/admin" element=<AdminSetup /> />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;

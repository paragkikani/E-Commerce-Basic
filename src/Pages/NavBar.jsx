import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminSetup from "../Components/AdminSetup";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<HomePage /> />
      </Routes>
      <Routes>
        <Route path="/admin" element=<AdminSetup /> />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;

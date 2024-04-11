import { useState } from "react";
import TextButton from "./Components/TextButton";
import AdminSetup from "./Pages/AdminSetup";
import HomePage from "./Pages/HomePage";

import { ToastContainer } from "react-toastify";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ToastContainer />
    </div>
  );
}

export default App;

import { useState } from "react";
import AdminSetup from "./Pages/AdminSetup";
import HomePage from "./Pages/HomePage";

import { ToastContainer } from "react-toastify";
import NavBar from "./Pages/NavBar";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div>
      <ThemeProvider>
        <NavBar />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UTost = {
  success: (msg, closeTime = 3000, progress = undefined, mode = "dark") => {
    toast.success("Success " + msg, {
      position: "top-right",
      autoClose: closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      progress: progress,
      theme: mode,
    });
  },
  error: (msg, closeTime = 3000, progress = undefined, mode = "dark") => {
    toast.error("Opps!! " + msg, {
      position: "top-right",
      autoClose: closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: progress,
      theme: mode,
    });
  },
};

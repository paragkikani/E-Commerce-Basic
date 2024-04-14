import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex-col flex h-screen w-full bg-blue-gray-300 items-center justify-center">
      <p className="text-white text-9xl font-extrabold">404</p>
      <h3 className="text-white text-5xl">
        Go To
        <Link to="/">HomePage</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;

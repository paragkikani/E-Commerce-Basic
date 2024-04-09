import React, { useState } from "react";

function InputWithLabel({ title, inputType, setVal }) {
  return (
    <div className="flex justify-center pb-5">
      <div className="w-full">
        <label className="text-gray-500 ">{title}</label>
        <input
          className="ring-1 ring-inset w-full ring-gray-500"
          inputMode={inputType}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputWithLabel;

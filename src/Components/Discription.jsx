import React from "react";

function Discription({ title, description, setVal }) {
  return (
    <div className="flex justify-center pb-5">
      <div className="w-full">
        <label className="text-gray-500">{title}</label>
        <textarea
          className="w-full h-24 ring-1 ring-gray-500 
          text-black placeholder-gray-500 text-1xl "
          placeholder={description}
          onChange={(e) => setVal(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default Discription;

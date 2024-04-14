import { Textarea } from "@material-tailwind/react";
import React from "react";

function Discription({ title, description, setVal }) {
  return (
    <div className="flex justify-center pb-5 mt-2">
      <div className="w-full">
        <Textarea
          label={title}
          className="w-full h-24 ring-1 ring-gray-500 
          text-black placeholder-gray-500 text-1xl
          font-chakra"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Discription;

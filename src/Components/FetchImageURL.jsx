import React, { useState } from "react";
import TextButton from "./TextButton";

function FetchImageURL({ onSubmit }) {
  const [inputURL, setInputURL] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputURL);
    setInputURL("");
  };
  return (
    <div className="flex justify-center  h-8 items-center">
      <div className="w-full h-full  flex">
        <input
          placeholder="Enter Image URL"
          className=" ring-1 ring-inset w-full ring-gray-500 mr-2"
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
          value={inputURL}
        ></input>
        <TextButton title="submit" onPress={handleOnSubmit} />
      </div>
    </div>
  );
}

export default FetchImageURL;

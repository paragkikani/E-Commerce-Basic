import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

function FetchImageURL({ onSubmit }) {
  const [inputURL, setInputURL] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputURL);
    setInputURL("");
  };
  return (
    <div className="flex justify-center  h-10 items-center mt-2">
      <div className="w-full h-full font-chakra flex">
        <Input
          label="Enter Image URL"
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
          style={{ fontFamily: "Chakra Petch" }}
          value={inputURL}
          inputMode="text"
        />
        <Button className="h-full font-chakra ml-1" onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FetchImageURL;

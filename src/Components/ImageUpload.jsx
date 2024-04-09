import React, { useState } from "react";
import { IoIosImages } from "react-icons/io";
import PreviewImage from "./PreviewImage";
import FetchImageURL from "./FetchImageURL";

function ImageUpload({ setVal }) {
  const [allImages, setAllImages] = useState([]);

  const handleOnChange = (event) => {
    const convertToArray = Array.from(event.target.files);
    const convertToUrl = convertToArray.map((i) => URL.createObjectURL(i));
    setAllImages([...allImages, ...convertToUrl]);
    setVal(allImages);
  };
  const handleFromURL = (url) => {
    setAllImages([...allImages, url]);
    setVal(allImages);
  };

  const removeFromAllImages = (url) => {
    setAllImages(allImages.filter((x) => x !== url));
    setVal(allImages);
  };
  return (
    <div>
      <div className="flex justify-center ">
        <div
          className="w-full  h-36 lg:h-48 flex items-center 
       border-dashed border-2 rounded-md"
        >
          <div
            className="flex flex-col bg-slate-300 w-full h-full items-center
        justify-center"
          >
            <IoIosImages className="w-10 h-10 " />
            <h3 className="flex text-gray-500">Drag & Drop Image here or</h3>
            <h3 className="flex font-bold "> Browse </h3>
            <input
              className="relative "
              accept="image/*"
              type="file"
              onChange={handleOnChange}
              multiple
            ></input>
          </div>
        </div>
      </div>
      <FetchImageURL onSubmit={handleFromURL} />
      {allImages.length > 0 && (
        <PreviewImage allFiles={allImages} remove={removeFromAllImages} />
      )}
    </div>
  );
}

export default ImageUpload;

import React, { useState } from "react";

function ProductSlider({ images }) {
  const [hoverImage, setHoverImage] = useState(images[0]);
  return (
    <div
      className="w-[500px] h-[500px] flex items-center
    justify-center"
    >
      <div className="flex flex-col overflow-hidden">
        {images.map((image) => (
          <div
            className=" flex items-center m-0.5 p-1 min-h-[100px] w-[100px] h-[100px]
           border-2 border-gray-200 hover:border-blue-800"
            onMouseEnter={() => setHoverImage(image)}
          >
            <div className="w-full h-full ">
              <img
                src={image}
                className="w-full h-full object-scale-down "
              ></img>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[390px] items-center justify-center ">
        <img className=" w-full  " src={hoverImage}></img>
      </div>
    </div>
  );
}

export default ProductSlider;

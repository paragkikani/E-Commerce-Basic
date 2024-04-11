import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function ProductSlider({ images }) {
  //   const urls = [
  //     "https://m.media-amazon.com/images/I/71LKrq35vhL._SX695_.jpg",
  //     "https://m.media-amazon.com/images/I/71aGLbq1oxL._SX695_.jpg",
  //     "https://m.media-amazon.com/images/I/717IfSJQwcL._SY695_.jpg",
  //     "https://m.media-amazon.com/images/I/719SYzrrOGL._SY695_.jpg",
  //   ];
  const [hoverImage, setHoverImage] = useState(images[0]);
  return (
    <div
      className="w-[500px] h-[500px] flex items-center
    justify-center"
    >
      <div className="flex flex-col overflow-hidden">
        {images.map((image) => (
          <div
            className="flex items-center p-1 min-h-[100px] w-[100px] h-[100px]
           border-2 border-gray-200 hover:border-blue-800"
            onMouseEnter={() => setHoverImage(image)}
          >
            <div className="">
              <img src={image}></img>
            </div>
          </div>
        ))}
        {/* <div className="flex justify-center w-full bg-gray-500">
          <FaChevronUp size={20} />
        </div>
        <div className="flex justify-center w-full bg-gray-500">
          <FaChevronDown size={20} />
        </div> */}
      </div>
      <div className="flex w-[390px] items-center justify-center ">
        <img className=" w-full  " src={hoverImage}></img>
      </div>
    </div>
  );
}

export default ProductSlider;

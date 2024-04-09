import React from "react";
import { FaStar } from "react-icons/fa";
import RatingBoard from "./RatingBoard";

function ProductShow({ image, title, rating, reviews, price }) {
  const url = "https://m.media-amazon.com/images/I/81WS1l9stUL._SX569_.jpg";
  image = url;
  return (
    <div className="relative w-[300px] h-[300px] ">
      <img className="object-cover  rounded-lg" src={image} />
      <div className=" absolute bg-black w-full h-1/3 bottom-0 opacity-70 flex flex-col justify-center">
        <div className="ml-[7px]">
          <h1 className="text-white p-[3px]">{title}</h1>
          <RatingBoard rated={rating} totalReview={reviews} />
          <h3 className="text-white p-[3px]">$ {price}</h3>
        </div>
      </div>
    </div>
  );
}
export default ProductShow;

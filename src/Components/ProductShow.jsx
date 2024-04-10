import React from "react";
import { FaStar } from "react-icons/fa";
import RatingBoard from "./RatingBoard";
import { Link, useNavigate } from "react-router-dom";

function ProductShow({ image, title, rating, reviews, price }) {
  const url = "https://m.media-amazon.com/images/I/81WS1l9stUL._SX569_.jpg";

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate("product/${productId}");
  };
  //image = url;
  return (
    <div
      onClick={handleProductClick}
      className="rounded-lg relative w-[300px] h-[300px] bg-white m-1"
    >
      <img
        className="object-center rounded-lg "
        src={image}
        alt="No Image Found"
      />
      <div className="rounded-lg absolute bg-black w-full h-1/3 bottom-0 opacity-70 flex flex-col justify-center">
        <div className="ml-[7px] ">
          <h1 className="text-white p-[3px]">{title}</h1>
          <RatingBoard rated={rating} totalReview={reviews} />
          <h3 className="text-white p-[3px]">$ {price}</h3>
        </div>
      </div>
    </div>
  );
}
export default ProductShow;

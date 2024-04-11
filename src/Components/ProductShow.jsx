import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import RatingBoard from "./RatingBoard";
import { Link, useNavigate } from "react-router-dom";

function ProductShow({
  productId,
  image,
  title,
  rating,
  reviewsCounter,
  price,
}) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("product/" + productId, { state: { productId: productId } });
  };

  const shortTitle = (str) => {
    return str.length > 35 ? str.substring(0, 32) + "..." : str;
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
          <h1 className=" text-white p-[3px]">{shortTitle(title)}</h1>
          <RatingBoard rated={rating} totalReview={reviewsCounter} />
          <h3 className="text-white p-[3px]">$ {price}</h3>
        </div>
      </div>
    </div>
  );
}
export default ProductShow;

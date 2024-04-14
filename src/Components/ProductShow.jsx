import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import RatingBoard from "./RatingBoard";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import { UTost } from "../utils/ToastHandler";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className=" h-96">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full rounded-md object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between ">
          <Typography color="blue-gray" className="font-medium font-chakra">
            {shortTitle(title)}
          </Typography>
          <Typography color="blue-gray" className="font-chakra font-medium">
            ₹ {price}
          </Typography>
        </div>
        <RatingBoard rated={rating} totalReview={reviewsCounter} />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none
           hover:scale-105 hover:shadow-none focus:scale-105 
           focus:shadow-none active:scale-100 font-chakra"
          onClick={handleProductClick}
        >
          More About Product
        </Button>
      </CardFooter>
    </Card>

    // <div className="rounded-lg relative w-[300px] h-[300px] bg-white m-1">

    //   <img
    //     className="object-center rounded-lg "
    //     src={image}
    //     alt="No Image Found"
    //     onClick={handleProductClick}
    //   />
    //   <div className="rounded-lg absolute bg-black w-full h-1/3 bottom-0 opacity-70 flex flex-col justify-center">
    //     <div className="ml-[7px] ">
    //       <h1 className=" text-white p-[3px]">{shortTitle(title)}</h1>
    //       <RatingBoard rated={rating} totalReview={reviewsCounter} />
    //       <div className="flex justify-between ">
    //         <h3 className="text-white p-[3px]">₹ {price}</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default ProductShow;

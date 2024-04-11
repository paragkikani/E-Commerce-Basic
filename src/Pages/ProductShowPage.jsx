import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RatingBoard from "../Components/RatingBoard";
import axios from "axios";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import { UTost } from "../utils/ToastHandler";
import ProductSlider from "../Components/ProductSlider";

function ProductShowPage() {
  const [product, setProduct] = useState(null);
  const { state } = useLocation();

  const fetchProduct = async () => {
    await axios
      .get(BASE_URL + URL_KEY.Product + state.productId)
      .then((responce) => {
        setProduct(responce.data);
        console.log("product : ", responce.data);
      })
      .then(() => {
        console.log("responce ", product);
      })
      .catch((error) => {
        UTost.error("Opps!!" + error);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className=" flex items-center justify-center ">
      {product ? (
        <div className="flex w-2/3 bg-slate-300">
          <ProductSlider images={product.images} />
          <div className="ml-5 mt-10 flex-1 flex-col">
            <p className="text-xl">{product.title}</p>
            <RatingBoard rated={product.rating} totalReview={20} />
            <p className="font-bold text-gray-600 text-md ">Discount 30 off</p>
            <h2 className="text-2xl font-bold">₹ {product.price}</h2>
            <h2 className="text-gray-400">Free Shipping</h2>
            <h2 className="text-2xl font-bold">Discription :</h2>
            <p>{product.details}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductShowPage;

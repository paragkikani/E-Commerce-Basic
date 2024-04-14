import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RatingBoard from "../Components/RatingBoard";
import axios from "axios";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import { UTost } from "../utils/ToastHandler";
import ProductSlider from "../Components/ProductSlider";

function ProductShowPage() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const fetchProduct = async () => {
    await axios
      .get(BASE_URL + URL_KEY.Product + params.productId)
      .then((responce) => {
        setProduct(responce.data);
        console.log("product : ", responce.data);
      })
      .then(() => {
        console.log("responce ", product);
      })
      .catch((error) => {
        UTost.error("Opps!!" + error);
        navigate("*");
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="mt-20 flex items-center justify-center ">
      {product ? (
        <div className="flex w-4/5 bg-slate-300 flex-col">
          <div className="flex ">
            <div className="w-[500px]">
              <ProductSlider images={product.images} />
            </div>
            <div className="ml-5 mt-10 flex-1 flex-col ">
              <p className="text-xl font-chakra font-bold">{product.name}</p>
              <RatingBoard
                rated={product.rating}
                totalReview={product.reviews.length}
              />
              <p className="font-bold text-gray-600 text-md font-chakra">
                - {product.discount}
              </p>
              <h2 className="text-2xl font-bold font-chakra">
                ₹ {product.price}
              </h2>
              <h2 className="text-gray-400 font-chakra">
                {product.shipping} Shipping
              </h2>
              <h2 className="text-2xl font-bold font-chakra">Discription :</h2>
              <p className="font-chakra">{product.details}</p>
            </div>
          </div>
          <div className=" flex-row">
            <h2 className="font-chakra text-xl font-semibold">Review</h2>
            {product.reviews.map((review, index) => (
              <p className="font-chakra text-gray-700">
                {index} : {review}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductShowPage;

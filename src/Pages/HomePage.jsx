import React, { useEffect, useState } from "react";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import ProductShow from "../Components/ProductShow";
import axios from "axios";
import AdminSetup from "../Components/AdminSetup";
import TextButton from "../Components/TextButton";
import { Link, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import { UTost } from "../utils/ToastHandler";

function HomePage() {
  const [productData, setProductData] = useState(null);

  const fetchData = async () => {
    try {
      const responce = await axios.get(BASE_URL + URL_KEY.Product);
      setProductData(responce);
    } catch (error) {
      UTost.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("Data = " + JSON.stringify(productData));
  }, []);

  let navigate = useNavigate();
  return (
    <div className="bg-gray-500 ">
      <div className="right-0 ">
        <TextButton
          title="Visit Admin Panel"
          onPress={() => navigate("/admin")}
        />
      </div>

      <div className="flex justify-center items-center">
        {
          // Slide Show Here
        }
        <div className="bg-gray-400 flex w-2/3 items-center  flex-wrap">
          {productData &&
            productData.data.map((data) => (
              <ProductShow
                key={data.id}
                image={data.images[0]}
                title={data.name}
                price={data.price}
                reviews={0}
                rating={0}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
ProductShow.prototype = {
  image:
    "https://europe1.discourse-cdn.com/figma/original/3X/6/1/6173a1aae8372541cfe858bbadccf198e2935f89.gif",
  title: "Title Name",
  price: "10",
};

export default HomePage;

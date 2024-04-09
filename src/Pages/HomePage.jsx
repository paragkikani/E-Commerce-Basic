import React, { useEffect } from "react";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import ProductShow from "../Components/ProductShow";
import axios from "axios";
import AdminSetup from "../Components/AdminSetup";
import TextButton from "../Components/TextButton";
import { Link, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import { UTost } from "../utils/ToastHandler";

function HomePage() {
  const getProductData = async () => {
    return await axios
      .get(BASE_URL + URL_KEY.Product)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        UTost.error("Turn on server: ", error.message);
      });
  };
  const data = useEffect(() => {
    console.log("allDta", getProductData());
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

      <div>
        {
          // Slide Show Here
        }
        <div className="bg-gray-500 ">
          {}
          <ProductShow
            image="https://m.media-amazon.com/images/I/81WS1l9stUL._SX569_.jpg"
            title="PowerBank"
            price={1500}
            reviews={10}
            rating={3.7}
          />
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

import React, { useEffect, useState } from "react";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import ProductShow from "../Components/ProductShow";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UTost } from "../utils/ToastHandler";
import { Button, IconButton } from "@material-tailwind/react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import LoginDialog from "../Dialogs/LoginDialog";
import { NavbarWithSearch } from "../Components/NavbarWithSearch";

function HomePage() {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const responce = await axios.get(BASE_URL + URL_KEY.Product);
      setProductData(responce.data);
    } catch (error) {
      UTost.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteTheItem = async (id) => {
    console.log("id : ", id);
    await axios
      .delete(BASE_URL + URL_KEY.Product + id)
      .then((responce) => {
        setProductData(productData.filter((x) => x.id !== id));
        UTost.success("Item Deleted : " + responce.data);
      })
      .catch((error) => {
        UTost.error("Error : " + error);
      });
  };

  const deleteItem = (event, productId) => {
    event.preventDefault();
    deleteTheItem(productId);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="right-0 flex justify-end">
        <NavbarWithSearch />
      </div>

      <div className="flex justify-center items-center">
        {
          // Slide Show Here
        }
        <div className=" flex mx-4 items-center flex-wrap mt-3">
          {productData &&
            productData.map((data) => (
              <div key={data.id} className="flex-col">
                <ProductShow
                  productId={data.id}
                  image={data.images[0]}
                  title={data.name}
                  price={data.price}
                  reviewsCounter={data.reviews.length}
                  rating={data.rating}
                />
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-red-500 text-lg">Testing</p>
                  <IconButton
                    onClick={(e) => {
                      deleteItem(e, data.id);
                    }}
                    color="red"
                    size="sm"
                    className="mr-5"
                  >
                    <RiDeleteBin5Fill size={18} />
                  </IconButton>
                </div>
              </div>
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

import React, { useState } from "react";
import InputWithLabel from "../Components/InputWithLabel";
import Discription from "../Components/Discription";
import ImageUpload from "../Components/ImageUpload";
import TextButton from "../Components/TextButton";
import uniqid from "uniqid";
import axios from "axios";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import { UTost } from "../utils/ToastHandler";
import { useNavigate } from "react-router-dom";

function AdminSetup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [details, setDetails] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  // Testing
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [discount, setDiscount] = useState("No Discount");
  const [shipping, SetShipping] = useState("");

  const handleClickToSubmit = (event) => {
    event.preventDefault();
    if (
      name.length === 0 ||
      weight === null ||
      details.length === 0 ||
      images.length === 0 ||
      price === null
    ) {
      UTost.error("Please Fill All Fields");
    }
    var data = {
      id: uniqid("product_") + "_" + uniqid.time(),
      name: name,
      weight: weight,
      price: price,
      details: details,
      images: images,
    };
    axios
      .post(BASE_URL + URL_KEY.Product, data)
      .then((response) => {
        console.log(response);
        UTost.success("Data Added!!");
      })
      .catch((error) => {
        console.log({ error });
        UTost.error(error.message);
      });
  };

  const gotoHome = () => {
    navigate("/");
  };
  const addReview = () => {

      
  };

  return (
    <form>
      <div className="flex items-center justify-center flex-col">
        <div className="flex justify-around">
          <h3 className="bg-slate-400 text-center">Product Details</h3>
          <TextButton title="Home" onPress={gotoHome} />
        </div>
        <div className=" justify-center items-center w-2/3 ">
          <InputWithLabel title="Name" inputType="email" setVal={setName} />
          <InputWithLabel
            title="Weight"
            inputType="numeric"
            setVal={setWeight}
          />
          <InputWithLabel title="Price" inputType="Numaric" setVal={setPrice} />
          <ImageUpload setVal={setImages} />
          <Discription
            title="Description"
            description="About Product in 3000 words"
            setVal={setDetails}
          />
          <div className="flex flex-col justify-center my-5 bg-gray-100">
            <h2 className="text-center "> -----------TESTING---------- </h2>
            <InputWithLabel
              title="Rating"
              inputType="numeric"
              setVal={setRating}
            />
            {
              <div>

                <InputWithLabel
                  title="Review"
                  inputType="Text"
                  setVal={setReviews}
                />
                <TextButton title="Add Review" onPress={addReview} />
              </div>
            }
            <InputWithLabel
              title="Discount"
              inputType="Text"
              setVal={setDiscount}
            />
            <InputWithLabel
              title="Shipping Charge"
              inputType="Text"
              setVal={SetShipping}
            />
          </div>

          <TextButton title="Submit" onPress={handleClickToSubmit} />
        </div>
      </div>
    </form>
  );
}

export default AdminSetup;

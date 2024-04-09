import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import Discription from "./Discription";
import ImageUpload from "./ImageUpload";
import TextButton from "./TextButton";
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
  const handleClickToSubmit = (event) => {
    event.preventDefault();
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

  const testing = (e) => {
    e.preventDefault();
    UTost.success("Hello Parag", 3000);
  };
  const gotoHome = () => {
    navigate("/");
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
          <TextButton title="Submit" onPress={handleClickToSubmit} />
        </div>
        <TextButton title="Testing" onPress={testing} />
      </div>
    </form>
  );
}

export default AdminSetup;

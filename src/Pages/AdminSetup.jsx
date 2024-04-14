import React, { useState } from "react";
import Discription from "../Components/Discription";
import ImageUpload from "../Components/ImageUpload";
import uniqid from "uniqid";
import axios from "axios";
import { BASE_URL, URL_KEY } from "../utils/ApiManager";
import { UTost } from "../utils/ToastHandler";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { NavbarWithSearch } from "../Components/NavbarWithSearch";
import InputCustome from "../Components/InputCustome";

function AdminSetup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("0");
  const [details, setDetails] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("0");
  // Testing
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [discount, setDiscount] = useState("No Discount");
  const [shipping, SetShipping] = useState("");

  const handleReviews = (index, singleReview) => {
    console.log("index = ", index, " : val = ", singleReview);
    const newReview = [...reviews];
    newReview[index] = singleReview;
    setReviews(newReview);
  };

  const handleClickToSubmit = (event) => {
    event.preventDefault();
    if (
      name.length === 0 ||
      weight === null ||
      details.length === 0 ||
      price === null
    ) {
      UTost.error("Please Fill All Fields");
      return;
    }

    // setReviews(reviewsPanel.map((x) => x.setVal));

    var data = {
      id: uniqid("product_") + "_" + uniqid.time(),
      name: name,
      weight: weight,
      price: price,
      details: details,
      images: images,
      rating: rating,
      reviews: reviews,
      discount: discount,
      shipping: shipping,
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

  const [reviewsPanel, setReviewsPanel] = useState([]);
  const addReview = (event) => {
    event.preventDefault();

    setReviewsPanel((s) => [
      ...s,
      { title: "Review", inputType: "Text", setVal: "" },
    ]);
  };

  const removeReview = (event) => {
    event.preventDefault();
    return setReviewsPanel(reviewsPanel.slice(0, -1));
  };

  return (
    <div>
      <div className="right-0 flex justify-end">
        <NavbarWithSearch />
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="flex justify-around">
          <h3 className="text-2xl mt-5 bg-slate-400 font-chakra text-center">
            Product Details
          </h3>
        </div>
        <div className="font-chakra justify-center items-center w-2/3 text-black">
          <InputCustome
            label="Name"
            onChange={setName}
            className=""
            inputMode="text"
          />

          <InputCustome
            label="Weight"
            inputMode="numeric"
            onChange={setWeight}
            className=""
          />
          <InputCustome
            label="Price"
            inputMode="Numeric"
            onChange={setPrice}
            className=""
          />
          <ImageUpload setVal={setImages} />
          <Discription
            title="Description"
            description="About Product in 3000 words"
            setVal={setDetails}
          />
          <div className="flex flex-col justify-center my-5 bg-gray-100">
            <h2 className="text-center "> -----------TESTING---------- </h2>
            <InputCustome
              label="Rating"
              inputMode="numeric"
              onChange={setRating}
              className=""
            />
            {
              <div className="flex flex-col justify-center">
                <Button
                  className="mb-2 font-chakra"
                  color="green"
                  onClick={addReview}
                >
                  Add Review
                </Button>
                {reviewsPanel.length > 0 && (
                  <div>
                    {reviewsPanel.map((review, index) => (
                      <InputCustome
                        label={review.title}
                        inputMode={review.inputType}
                        onChange={(val) => handleReviews(index, val)}
                        className=""
                      />
                    ))}
                    <Button
                      className="w-full font-chakra mb-2"
                      color="red"
                      onClick={removeReview}
                    >
                      Remove Review
                    </Button>
                  </div>
                )}
              </div>
            }
            <InputCustome
              label="Discount"
              inputMode="Text"
              onChange={setDiscount}
              className=""
            />

            <InputCustome
              label="Shipping Charge"
              inputMode="Text"
              onChange={(e) => SetShipping(e.target.value)}
              className=""
            />
          </div>

          <Button fullWidth onClick={handleClickToSubmit} color="blue">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSetup;

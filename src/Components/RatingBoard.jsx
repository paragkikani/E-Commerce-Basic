import React from "react";
import { FaStar } from "react-icons/fa";

function RatingBoard({ rated, totalReview }) {
  const totalStar = 5;
  const rating = rated;

  const RatingStar = () => {
    let stars = [];
    for (let i = 0; i < totalStar; i++) {
      const isYellow = i < Math.floor(rating);
      const isHalf = rating - i >= 0.5;
      stars.push(
        <FaStar
          key={i}
          className={`w-[20px] h-[20px] ml-[2px] ${
            isYellow ? "text-yellow-500" : "text-gray-400"
          } ${isHalf ? "" : "opacity-50"}`}
        />
      );
    }
    return stars;
  };

  const rateWiseColor = () => {
    if (rating > 1 && rating < 2.5) {
      return "#FF2D00";
    } else if (rating > 2.5 && rating < 3.5) {
      return "#9aa800";
    } else {
      return "#00AC2A";
    }
  };

  return (
    <div className="flex ">
      {rated == 0 && (
        <div
          style={{ backgroundColor: rateWiseColor() }}
          className="bg-red-500 flex rounded-md justify-center items-center"
        >
          {rated > 0 ? (
            <div>
              <h2 className="px-1 py-[3px] font-bold text-white">{rated}</h2>
              <FaStar className="w-[20px] h-[20px] text-white pr-[5px]" />
            </div>
          ) : (
            <h4 className="px-1 py-[3px] font-bold text-white">
              {" "}
              Newlly Launch{" "}
            </h4>
          )}
        </div>
      )}
      {totalReview && (
        <h2 className="text-white ml-2 font-bold">( {totalReview} Review )</h2>
      )}
    </div>
  );
}

export default RatingBoard;

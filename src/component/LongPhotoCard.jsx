/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const LongPhotoCard = ({ images }) => {
  return (
    <>
      <div className="h-full lg:w-[75%] sm:w-full md:w-full">
        <img
          src={images}
          alt="/"
          className="w-full h-[98%] object-cover rounded duration-200 transition-all hover:translate-y-1"
        />
      </div>
    </>
  );
};

export default LongPhotoCard;

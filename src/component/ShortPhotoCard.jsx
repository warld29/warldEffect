// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ShortPhotoCard = ({ images }) => {
  return (
    <>
      <div className="h-full w-full lg:w-[24%] sm:w-full md:w-full">
        <img
          src={images}
          alt=""
          className="w-full h-[98%] object-cover rounded duration-200 transition-all hover:translate-y-1"
        />
      </div>
    </>
  );
};

export default ShortPhotoCard;

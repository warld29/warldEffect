/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = ({ text }) => {
  return (
    <div className="py-5">
      <button className="text-2xl text-white font-light py-3 px-8 rounded-full bg-[gold] hover:bg-white hover:text-black duration-200 transition-all hover:translate-y-4">
        {text}
      </button>
    </div>
  );
};

export default Button;

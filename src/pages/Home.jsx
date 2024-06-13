/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "flowbite-react";
import citybg from "../assets/citybg.jpg";
import handbg3 from "../assets/handbg3.jpg";
import lensbg2 from "../assets/lensbg2.jpg";
import recbg from "../assets/recbg.jpg";
import owlbg from "../assets/owlbg.jpg";
import Button from "../component/Button.jsx";

const Home = () => {
  return (
    <div id="Home" className="">
      <Carousel className="w-[100%] h-screen absolute">
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={lensbg2} alt="" />
        </div>
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={handbg3} alt="" />
        </div>
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={citybg} alt="" />
        </div>

        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={recbg} alt="" />
        </div>
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={owlbg} alt="" />
        </div>
      </Carousel>
      <div className=" font-serif right-5 text-white text-5xl font-semibold flex items-center flex-col justify-center py-5 h-screen px-8  md:5xl relative">
        <h1 className="font-serif text-center text-[gold]">
          Capture moments, create memories. <br /> <br />
          <span className="font-light text-white">
            Discover the world through the lens of photography
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;

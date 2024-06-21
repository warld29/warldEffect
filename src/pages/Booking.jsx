/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import cats from "../assets/cats.jpg";
import illus from "../assets/illus.jpg";
import Button from "../component/Button.jsx";
import RegistrationForm from "../component/RegistrationForm.jsx";
import sunset from "../assets/sunset.jpg";
import mountains from "../assets/mountains.jpg";
import badguys from "../assets/badguys.jpg";
import beach from "../assets/beach.jpg";
import bgflow from "../assets/bgflow.jpg";
import item2 from "../assets/item2.jpg";
import deer from "../assets/deer.jpg";
import flower from "../assets/flower.jpg";
import fox from "../assets/fox.jpg";
import vintage from "../assets/vintage.jpg";
import wolf from "../assets/wolf.jpg";
import onewith from "../assets/onewith.jpg";
import ShortPhotoCard from "../component/ShortPhotoCard.jsx";
import LongPhotoCard from "../component/LongPhotoCard.jsx";
import MyFooter from "../component/MyFooter.jsx";

// eslint-disable-next-line react/prop-types
const Booking = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };
  return (
    <>
      <div className=" text-white min-h-[100vh] w-full relative" id="Booking">
        <div className="flex w-full h-[100vh]">
          <>
            <div className="w-[100%] md:w-[50%] bg-green-200">
              <img src={cats} alt="" className="object-fit h-[100%] w-full" />
            </div>
            <div className="w-[0] md:w-[50%] bg-green-200">
              <img src={illus} alt="" className="object-fit h-[100%] w-full" />
            </div>
            <div className="text-center flex flex-col justify-center items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">
                <span className="md:text-[gold]">Join</span> the <br /> Fa
                <span className="md:text-white">m</span>
                ily
              </h1>
              <div className="md:block hidden" onClick={toggleRegistrationForm}>
                <Button text={"Join Us"} />
              </div>
            </div>
            {/* Registration form */}
            {isRegistrationOpen && (
              <RegistrationForm
                className="text-white"
                onClose={toggleRegistrationForm}
              />
            )}
          </>
        </div>
      </div>

      <div className=" bg-black">
        <div className=" w-[100%] lg:h-[50vh] p-4 lg:flex lg:items-center lg:justify-center gap-2 py-1">
          <LongPhotoCard images={sunset} />
          <ShortPhotoCard images={mountains} />
        </div>
        <div className=" w-[100%] lg:h-[50vh] p-4 lg:flex lg:items-center lg:justify-center gap-2 py-1">
          <ShortPhotoCard images={wolf} />
          <ShortPhotoCard images={vintage} />
          <ShortPhotoCard images={onewith} />
          <ShortPhotoCard images={fox} />
        </div>
        <div className=" w-[100%] lg:h-[50vh] p-4 lg:flex lg:items-center lg:justify-center gap-2 py-1">
          <ShortPhotoCard images={deer} />
          <LongPhotoCard images={flower} />
        </div>
        <div className=" w-[100%] lg:h-[50vh] p-4 lg:flex lg:items-center lg:justify-center gap-2 py-1">
          <ShortPhotoCard images={item2} />
          <ShortPhotoCard images={bgflow} />
          <ShortPhotoCard images={beach} />
          <ShortPhotoCard images={badguys} />
        </div>
      </div>
      <div>
        <MyFooter />
      </div>
    </>
  );
};

export default Booking;

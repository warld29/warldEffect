/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Button from "../component/Button.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

const Navbar = ({ text }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="sm:absolute w-full bg-black text-white fixed">
      <div
        className={`flex flex-col md:flex-row items-center font-medium justify-around ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-black duration-300"
            : ""
        }`}
      >
        <div className="z-50 p-5 md:w-auto w-full h-full flex justify-between ">
          <h1 className="md:cursor-pointer font-semibold font-serif text-2xl md:text-3xl h-15">
            Warld<span className="text-[gold]">Effect</span>
          </h1>
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none md:hidden"
          >
            {openMenu ? (
              <FaXmark className="h-6 w-7 " />
            ) : (
              <FaBars className="h-6 w-7 " />
            )}
          </button>
        </div>
        <ul className="md:flex hidden uppercase items-center  gap-8 ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block cursor-pointer">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link
              to="booking"
              smooth={true}
              duration={500}
              link="Booking"
              className="py-7 px-3 inline-block cursor-pointer"
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              to="subcribe"
              className="py-7 px-3 inline-block cursor-pointer"
            >
              Subscribe
            </Link>
          </li>
        </ul>
        <div className="md:block hidden" onClick={toggleRegistrationForm}>
          <Button text={"Sign Up"} />
        </div>

        {/*  MOBILE SCREEN SIZE     */}

        <div
          className={`space-y-4 ${
            openMenu
              ? "fixed flex flex-col justify-center items-center top-0 right-0 left-0 h-screen"
              : "hidden"
          }`}
        >
          <ul
            className={`
          md:hidden bg-black flex flex-col w-full h-[100vh] bottom-0 py-24 pl-4
        `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block cursor-pointer">
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/" className="py-7 px-3 inline-block cursor-pointer">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/" className="py-7 px-3 inline-block cursor-pointer">
                Subscribe
              </Link>
            </li>
            <div className="py-5" onClick={toggleRegistrationForm}>
              <Button text={"Sign Up"} />
            </div>
          </ul>
        </div>

        {/* Registration form */}
        {isRegistrationOpen && (
          <RegistrationForm
            className="text-white"
            onClose={toggleRegistrationForm}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { GrCart } from "react-icons/gr";
// import { Link } from "react-scroll";
// import { FaBars } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.addEventListener("scroll", handleScroll);
//     };
//   });

//   const handleMenuItemClick = () => {
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { link: "Home", path: "home" },
//     {
//       link: "Collection",
//       path: "collection",
//       dropdownItems: [
//         { link: "Wedding", path: "collection/wedding" },
//         { link: "Model", path: "collection/model" },
//         { link: "Nature", path: "collection/nature" },
//       ],
//     },
//     { link: "Portrait", path: "Portrait" },
//     { link: "Bookings", path: "bookings" },
//     { link: "Contact", path: "contact" },
//   ];

//   return (
//     <header className="w-full bg-black ma:bg-transparent fixed top-0 left-0 right-0">
//       <nav
//         className={`py-4 lg:px-14 px-4 ${
//           isSticky ? "sticky top-0 left-0 right-0 bg-black duration-300" : ""
//         }`}
//       >
//         <div className="text-white flex justify-between items-center text-base gap-8">
//           <h1 className="text-white w-10 inline-block items-center text-2xl font-serif font-semibold lg:text-3xl">
//             Warld<span className="text-[gold]">Effect</span>
//           </h1>

//           {/* <ul className="md:flex items-center justify-center space-x-10 hidden ">
//             {navItems.map(({ link, path, dropdownItems }) => (
//               <Link
//                 to={path}
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 key={path}
//                 className="block font-serif text-white font-bold text-xl hover:text-[gold] hover:border-b-2 hover:border-[gold] py-2 cursor-pointer"
//               >
//                 {link}
//               </Link>
//             ))}
//           </ul> */}

//           <ul className="md:flex space-x-10 hidden ">
//             {navItems.map(({ link, path, dropdownItems }) => (
//               <li key={path} className="relative">
//                 <div
//                   className={`block font-serif text-white font-bold text-xl ${
//                     path === "collection" && isMenuOpen ? "text-[gold]" : ""
//                   } hover:border-b-2 ${
//                     path === "collection" ? "hover:border-[gold]" : ""
//                   } py-2 cursor-pointer relative`}
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                   {link}
//                   {path === "collection" && (
//                     <button
//                       className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleMenu();
//                       }}
//                     >
//                       {isMenuOpen ? (
//                         <FaXmark className="text-[gold] h-5 w-5" />
//                       ) : (
//                         <div className="flex items-center justify-end gap-5">
//                           <RiArrowDropDownLine className="text-[gold] h-5 w-5" />
//                         </div>
//                       )}
//                     </button>
//                   )}
//                 </div>
//                 {path === "collection" && isMenuOpen && (
//                   <ul className="absolute top-full left-0 bg-white rounded shadow-md mt-1">
//                     {dropdownItems.map(({ link, path }) => (
//                       <li key={path}>
//                         <Link
//                           to={path}
//                           spy={true}
//                           smooth={true}
//                           offset={-100}
//                           className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                           onClick={handleMenuItemClick}
//                         >
//                           {link}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="space-x-8 hidden lg:flex items-center">
//             <button className="bg-white text-black py-2 px-4 transition-all duration-300 rounded hover:bg-[gold] hover:-translate-y-4">
//               Sign Up
//             </button>

//             <GrCart className="text-white text-4xl cursor-pointer hover:text-[gold]" />
//           </div>
//           <div className="md:flex items-center justify-center text-xl hidden lg:hidden">
//             <GrCart className="text-white text-4xl cursor-pointer hover:text-[gold]" />
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none focus:text-[gold]"
//             >
//               {isMenuOpen ? (
//                 <FaXmark className="h-6 w-7 " />
//               ) : (
//                 <FaBars className="h-6 w-7 " />
//               )}
//             </button>
//           </div>

//           <div
//             className={`space-y-4 px-4  mt-16 py-7 bg-black ${
//               isMenuOpen
//                 ? "fixed flex flex-col justify-center items-center top-0 right-0 left-0 h-screen"
//                 : "hidden"
//             }`}
//           >
//             {navItems.map(({ link, path }) => (
//               <Link
//                 to={path}
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 key={path}
//                 className="block text-base text-white hover:text-blue-400"
//                 onClick={handleMenuItemClick}
//               >
//                 {link}
//               </Link>
//             ))}

//             <div
//               onClick={handleMenuItemClick}
//               className="block text-base space-y-12 justify-center items-center text-center"
//             >
//               <button className="bg-white text-black py-2 px-4 transition-all duration-300 rounded hover:bg-[gold] hover:-translate-y-4">
//                 Sign Up
//               </button>

//               <GrCart className="text-white text-4xl cursor-pointer hover:text-[gold] text-center" />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

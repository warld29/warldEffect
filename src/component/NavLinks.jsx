/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { links } from "../component/Mylinks";
import { IoIosArrowDropdown } from "react-icons/io";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Booking",
      link: "/booking",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 inline">
                <IoIosArrowDropdown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block w-[200px]">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-black rotate-45"></div>
                  </div>
                  <div className="bg-black p-5">
                    {link.sublinks?.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, slinkIndex) => (
                          <li
                            key={`${subIndex}-${slinkIndex}`}
                            className="text-sm text-gray-200 my-2.5"
                          >
                            <Link to={slink.link} className="hover:text-[gold]">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* SUBLINK */}
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex gap-2 items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <IoIosArrowDropdown />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <li
                        key={`${subIndex}-${slinkIndex}`}
                        className="py-3 pl-14"
                      >
                        <Link to={slink.link} className="hover:text-[gold]">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

// {
//   links.map((link, index) => (
//     <div>
//       <div className="px-3 text-left md:cursor-pointer group">
//         <h1
//           className="py-7 flex justify-between items-center md:pr-0 pr-5 "
//           onClick={() => {
//             heading !== link.name
//               ? setHeading(link.name)
//               : setHeading("");
//             setSubHeading("");
//           }}
//         >
//           {link.name}
//           <span className="text-xl md:mt-1 md:ml-2 inline">
//             <IoIosArrowDropdown />
//           </span>
//         </h1>
//         {link.submenu && (
//           <div>
//             <div className="absolute top-20 hidden group-hover:md:block hover:md:block w-[200px]">
//               <div className="py-3">
//                 <div className="w-4 h-4 left-3 absolute mt-1 bg-black rotate-45"></div>
//               </div>
//               <div className="bg-black p-5 ">
//                 {link.sublinks?.map((mysublinks) => (
//                   <div>
//                     <h1 className="text-lg font-semibold">
//                       {mysublinks.Head}
//                     </h1>
//                     {mysublinks.sublink.map((slink) => (
//                       <li className="text-sm text-gray-200 my-2.5">
//                         <Link
//                           to={slink.link}
//                           className="hover:text-[gold]"
//                         >
//                           {slink.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/*             mobile menu               */}
//       <div
//         className={`
//       ${heading === link.name ? "md:hidden" : "hidden"}
//     `}
//       >
//         {/*           SUBLINK               */}
//         {link.sublinks.map((slinks) => (
//           <div>
//             <div>
//               <h1
//                 onClick={() =>
//                   subHeading !== slinks.Head
//                     ? setSubHeading(slinks.Head)
//                     : setSubHeading("")
//                 }
//                 className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex gap-2 items-center"
//               >
//                 {slinks.Head}

//                 <span className="text-xl md:mt-1 md:ml-2 inline">
//                   <IoIosArrowDropdown />
//                 </span>
//               </h1>
//               <div
//                 className={`${
//                   subHeading === slinks.Head ? "md:hidden" : "hidden"
//                 }`}
//               >
//                 {slinks.sublink.map((slink) => (
//                   <li className="py-3 pl-14">
//                     <Link to={slink.link} className="hover:text-[gold]">
//                       {slink.name}
//                     </Link>
//                   </li>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ));
// }

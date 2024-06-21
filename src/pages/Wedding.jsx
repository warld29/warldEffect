/* eslint-disable no-unused-vars */
// import Navbar from "../component/Navbar";
// import React from "react";

// const Wedding = () => {
//   return (
//     <div id="Wedding">
//       <Navbar />
//       <div className="w-full h-full bg-black text-white">
//         <h1>wedding</h1>
//       </div>
//     </div>
//   );
// };

// export default Wedding;

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const Wedding = () => {
  let { id } = useParams();

  return (
    <div className="bg-black text-white h-[100vh] w-full" id="wedding">
      <h2>Wedding Details for ID: {id}</h2>
      <div>
        <h1 className="text-5xl">Bulllshit</h1>
      </div>
    </div>
  );
};

export default Wedding;

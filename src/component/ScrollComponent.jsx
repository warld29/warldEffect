/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";

const ScrollComponent = () => {
  return (
    <div>
      <Link to="targetElement" smooth={true} duration={500}>
        Scroll to Target Element
      </Link>

      {/* Element to scroll to */}
      <div id="targetElement">{/* Content */}</div>
    </div>
  );
};

export default ScrollComponent;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex gap-16 justify-end px-16 py-8 backdrop-blur">
        <Link to="/team">
          <p className="text-2xl  text-gray-200 hover:text-white hover:font-semibold hover:cursor-pointer">
            Team
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-2xl  text-gray-200 hover:text-white hover:font-semibold hover:cursor-pointer">
            Contact Us
          </p>
        </Link>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-y-0 px-12 sm:gap-x-4">
      <Link to="/custom-order">
        <button className="vvsm:px-14  vsm:px-20 py-2 text-center text-white bg-black  rounded hover:text-black hover:bg-white focus:outline-none focus:ring">
          Custom Order
        </button>
      </Link>
      <Link to="/demo-drive">
        <button className="vvsm:px-16  vsm:px-20 py-2  text-center text-black  bg-white  rounded hover:text-white hover:bg-black focus:outline-none focus:ring">
          Demo Drive
        </button>
      </Link>
    </div>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-y-0 px-12 sm:gap-x-4">
      <Link to="/custom-order">
        <button className="w-full vvsm:px-12 md:px-0 bg-[#393c41] text-white cursor-pointer rounded-md p-2 font-medium sm:w-80">
          Custom Order
        </button>
      </Link>
      <Link to="/demo-drive">
        <button className="w-full vvsm:px-14  md:px-0 bg-[#e5e6e5] text-black cursor-pointer rounded-md p-2 font-medium sm:w-80">
          Demo Drive
        </button>
      </Link>
    </div>
  );
};

export default Button;

import React from "react";

function Copyright() {
  return (
    <div className="text-center py-2  bg-black bg-opacity-15 font-Poppins  ">
      <p className="text-sm">
        © {new Date().getFullYear()} Tesla. All rights reserved.
      </p>
    </div>
  );
}

export default Copyright;

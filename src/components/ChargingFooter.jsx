import React from "react";
import { Link } from "react-router-dom";

function ChargingFooter() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center mt-32">
        <h2 className="text-2xl font-semibold">Go Anywhere</h2>
        <p className="text-center mt-2 mb-8">
          Schedule a demo drive and learn how to charge at home or on the road.
        </p>
        <Link to="/demo-drive">
          <button className="mt-4 border border-black font-bold py-2 px-4 rounded">
            Demo Drive
          </button>
        </Link>
      </div>
    </>
  );
}

export default ChargingFooter;

import React from "react";
import Image1 from "../assets/images/trip.jpg";
import Image2 from "../assets/images/sleep.jpg";
import Image3 from "../assets/images/day.jpg";
import HomeCharging from "./HomeCharging";

function ChargingType() {
  return (
    <div className="lg:p-16 vvsm:p-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-2">
          <img src={Image1} alt="Trip" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">While You Sleep</h1>
            <p className="text-sm text-gray-600">
              Plug in at home or at nearby public chargers.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <img src={Image2} alt="Sleep" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">During the Day</h1>
            <p className="text-sm text-gray-600">
              Charge at a local Supercharger or at your workplace.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <img src={Image3} alt="Day" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">On Road Trips</h1>
            <p className="text-sm text-gray-600">
              Recharge at Superchargers on the way or at your destination.
            </p>
          </div>
        </div>
      </div>

      <HomeCharging />
    </div>
  );
}

export default ChargingType;

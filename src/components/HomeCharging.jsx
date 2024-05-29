import React from "react";
import universal from "../assets/images/universal.jpg";
import mobileconnector from "../assets/images/mobileconnector.jpg";
import wallconnector from "../assets/images/wall connector.jpg";
import ChargingFooter from "./ChargingFooter";

function HomeCharging() {
  return (
    <div className="lg:p-16 vvsm:p-4 ">
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="md:text-3xl vvsm:text-2xl font-semibold my-4">
          Three Ways to Charge at Home
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-2">
          <img src={mobileconnector} alt="Trip" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">Mobile Connector</h1>
            <p className="text-sm text-gray-600 text-balance leading-6 mt-5 ">
              Portable and convenient, charge your Tesla vehicle wherever you
              are. Mobile Connector adds up to 3 miles of range per hour (or 1.3
              kW) on standard household outlets or up to 30 miles (or 7.6 kW) on
              a 240 V outlet.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <img src={wallconnector} alt="Sleep" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">Wall Connector</h1>
            <p className="text-sm text-gray-600 text-balance leading-6 mt-5">
              A faster and Wi-Fi enabled option for your Tesla vehicle, Wall
              Connector receives over-the-air updates so the charger becomes
              better over time. Wall Connector adds up to 44 miles of range per
              hour (or 11.5 kW). Installation is required.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <img src={universal} alt="Day" className="w-full h-auto" />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold">Universal Wall Connector</h1>
            <p className="text-sm text-gray-600 text-balance leading-6 mt-5">
              With the same speed, power and functionality as Wall Connector,
              Universal Wall Connector is compatible with Tesla vehicles and
              non-Tesla EVs. Universal Wall Connector adds up to 44 miles of
              range per hour (or 11.5 kW). Installation is required
            </p>
          </div>
        </div>
      </div>
      <ChargingFooter />
    </div>
  );
}

export default HomeCharging;

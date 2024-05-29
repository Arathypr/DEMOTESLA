import React from "react";
import solorvideo from "../../assets/images/solar.mp4";
import SolarFooter from "./SolarFooter";
import Copyright from "../Copyright";
import SolarDetails from "./SolarDetails.jsx";

function Energy() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={solorvideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center font-Poppins">
          <h1 className="text-4xl font-semibold mb-4 text-white">Energy</h1>
          <p className="text-lg mb-8 text-white">
            Clean and renewable energy solutions
          </p>
          <div className="flex flex-col vvsm:flex-col space-y-4 vvsm:space-y-4 md:flex-row md:space-y-0 md:space-x-4 mt-[20%]">
            <button className="bg-[#393c41] text-white font-semibold py-2 ssm:px-20 rounded">
              Order Now
            </button>
            <button className="bg-[#e5e6e5] text-black font-semibold py-2 ssm:px-6 vvsm:px-5 rounded">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4 text-white bg-black">
        <h1 className="md:text-3xl vvsm:text-2xl font-semibold my-4">
          Save With Solar Over Time
        </h1>
        <p className=" md:block vvsm:hidden text-base  my-4 text-center">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. <br></br>
          Tax incentives and flexible financing options ensure you get the best
          price for your solar system.
        </p>{" "}
        <p className=" md:hidden  text-sm  my-4 text-center">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. Tax
          incentives and flexible financing options ensure you get the best
          price for your solar system.
        </p>
      </div>
      <SolarDetails />
      <SolarFooter />
      <Copyright />
    </>
  );
}

export default Energy;

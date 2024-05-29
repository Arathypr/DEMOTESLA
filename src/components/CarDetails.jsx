import React from "react";
import { navLinks } from "./constant/index";
import Button from "./Button";
import details from "../assets/images/details.png";
import Detail from "./Detail";
import Video from "./Video";
import Footer from "./Footer";

const CarDetails = () => {
  const car = navLinks[0];

  const footerData = navLinks[0];

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Car not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-screen ">
        <img
          src={car.imgbg}
          alt={car.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black ">
          <div className="sm:mb-60 vvsm:mb-40">
            <h1 className=" vvsm:text-3xl sm:text-4xl font-bold mb-4">
              {car.title}
            </h1>
            <p className="vvsm:text-lg sm:text-xl mb-4">{car.desc}</p>
            <p className=" vvsm:text-base sm:text-xl font-semibold mb-4">
              From $50,000
            </p>
          </div>
          <div className=" vvsm:hidden sm:flex flex-wrap justify-between text-white  mb-5 sm:ml-32 md:ml-0">
            <div className="w-full  sm:w-1/2 md:w-1/4 mb-4">
              <div className="text-center w-40">
                <p className="text-lg  font-bold ">{car.range}</p>
                <h2 className="text-xs font-semibold ">Range (EPA est.)</h2>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="text-center w-40">
                <p className="text-lg  font-bold ">{car.acceleration}</p>
                <h2 className="text-xs font-semibold1 ">0-60 mph*</h2>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="text-center w-40">
                <p className="text-lg  font-bold ">{car.topSpeed}</p>
                <h2 className="text-xs font-semibold">Top Speed†</h2>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="text-center w-40">
                <p className="text-lg  font-bold ">{car.peakPower}</p>
                <h2 className="text-xs font-semibold">Peak Power</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col    w-full  gap-y-6 sm:flex">
            <Button button={car.button} />
          </div>
        </div>
      </div>
      <div className="bg-black pt-4">
        <h1 className="flex justify-center text-white md:text-2xl vvsm:text-xl font-mono opacity-40 pb-4 ">
          Interior of the Future
        </h1>
        <img src={details} alt="" className="w-screen h-[90vh]" />
      </div>
      <Detail />
      <Video />
      <Footer data={footerData} />
    </>
  );
};

export default CarDetails;

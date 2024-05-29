import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClock,
  faDollarSign,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import ChargingType from "./ChargingType";
import Copyright from "./Copyright";

function Charging() {
  const [imageDetails, setImageDetails] = useState([]);

  useEffect(() => {
    // Fetch image details from the API
    fetch(
      "http://localhost:8080/api/imageDetails/getImageDetailsById?imageId=11"
    )
      .then((response) => response.json())
      .then((data) => setImageDetails([data]))
      .catch((error) => console.error("Error fetching image details:", error));
  }, []);

  return (
    <>
      <section>
        {imageDetails.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center"
          >
            <img
              src={item?.vehicleImages[0]?.imageUrl}
              className="h-screen w-full object-cover"
              alt={item?.vehicleImages?.color}
            />
            <div className="absolute pt-28 flex flex-col h-screen w-full items-center justify-between ">
              <div className="flex flex-col items-center text-white font-Poppins title ">
                <h1 className="text-4xl font-normal leading-loose">
                  {item?.title}
                </h1>
                <p className=" vvsm:text-base md:text-xl">
                  {item?.description}
                </p>
              </div>
            </div>
            <div className="absolute vvsm:hidden sm:flex flex-wrap justify-between text-white  sm:ml-32 md:ml-0 mt-[30%] ">
              <div className="w-full  sm:w-1/2 md:w-1/4 mb-4">
                <div className="text-center w-40">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                  <h2 className="text-sm font-semibold ">
                    Designed for Any Property
                  </h2>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                <div className="text-center w-40">
                  <FontAwesomeIcon icon={faClock} size="1x" />
                  <h2 className="text-sm font-semibold">Charge Anytime</h2>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                <div className="text-center w-40">
                  <FontAwesomeIcon icon={faDollarSign} size="1x" />
                  <h2 className="text-sm font-semibold">Less than gasoline</h2>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                <div className="text-center w-40">
                  <FontAwesomeIcon icon={faWrench} size="1x" />
                  <h2 className="text-sm font-semibold">
                    Tesla Certified Installers
                  </h2>
                </div>
              </div>{" "}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="md:text-3xl vvsm:text-2xl font-semibold my-4">
            Three Ways to Charge at Home
          </h2>
          <p className=" md:block vvsm:hidden text-base  my-4 text-center">
            With plenty of range for both daily drives and road trips, Tesla
            vehicles get you where you want to go. Charging is fast, <br></br>{" "}
            convenient and available anywhere with electricity.
          </p>{" "}
          <p className=" md:hidden  text-sm  my-4 text-center">
            With plenty of range for both daily drives and road trips, Tesla
            vehicles get you where you want to go. Charging is fast, convenient
            and available anywhere with electricity.
          </p>
          <div className="mb-6 mt-6">
            {" "}
            <button className="border-black  border font-bold py-2 px-4 rounded">
              Help Me Charge
            </button>
          </div>
        </div>
      </section>
      <ChargingType />
      <Copyright />
    </>
  );
}

export default Charging;

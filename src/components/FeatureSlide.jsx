import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons from react-icons
import sliderimg1 from "../assets/images/img1.jpg";
import sliderimg2 from "../assets/images/img2.jpg";
import sliderimg3 from "../assets/images/img3.jpg";
import sliderimg4 from "../assets/images/img4.jpg";
import sliderimg5 from "../assets/images/img5.jpg";

const data = [
  {
    img: sliderimg1,
    title: "Basic Autopilot",
    review:
      " Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane. Advanced safety and convenience features are designed to assist you with the most burdensome parts of driving, alongside driver assistance features such as emergency braking, collision warning and blind-spot monitoring",
  },
  {
    img: sliderimg2,
    title: "Easy Charging",
    review:
      " Charge anywhere there is electricity. Most range used for daily driving can be topped off using the Mobile Connector Bundle and a 110V household outlet, or upgrade to a 220V Tesla Wall Connector for the best home charging experience. For long distance travel, Model Y adds up to 160 miles of range in just 15 minutes using Tesla’s Supercharger network, getting you back on the road, sooner.",
  },
  {
    img: sliderimg3,
    title: "Over-the-Air",
    review:
      "  Updates Model Y gets better over time with frequent wireless software updates, bringing you new features, more entertainment, higher performance and range, increased comfort and even better safety.",
  },
  {
    img: sliderimg4,
    title: "Expansive Storage",
    review:
      "Model Y features 76 ft³ of cargo space accessible through both the front trunk and the automatically opening and closing rear trunk. Taking advantage of the space traditionally occupied by bulky engines, gas tanks and transmissions, the design of Model Y enables disproportionately large amounts of storage for a car its size, while bolstering occupant safety through a more spacious, reinforced body and chassis.",
  },
  {
    img: sliderimg5,
    title: "Tesla Mobile App",
    review:
      " Remotely control and monitor your Tesla with Phone Key keyless driving, range & charging status, climate control, live GPS location and more. You can even schedule service and monitor your entire Tesla ecosystem, including power flow from Powerwall or from Solar Roof and Solar Panels.",
  },
];

function OpenBookSlider({ isVisible, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isVisible) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className=" fixed  inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="relative flex items-center justify-center w-full max-w-3xl">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-4 text-white bg-gray-700 bg-opacity-50 p-2 sm:p-3 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>
        <div
          className="bg-white rounded-lg w-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col sm:flex-row items-center transition-container">
            <div className="flex-shrink-0 sm:mr-4 mb-4 sm:mb-0">
              <img
                src={data[currentIndex].img}
                alt={`slide_image_${currentIndex}`}
                className="h-[250px] sm:h-[300px] lg:h-[450px] w-full object-contain transition-slide "
              />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center text-center sm:text-left">
              <h1 className="text-black text-xl sm:text-2xl font-medium pb-5">
                {data[currentIndex].title}
              </h1>
              <p className="text-black text-sm text-left vvsm:text-sm sm:text-sm md:base transition-slide leading-5">
                {data[currentIndex].review}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-4 text-white bg-gray-700 bg-opacity-50 p-2 sm:p-3 rounded-full z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default OpenBookSlider;

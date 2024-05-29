// FeaturedVideo.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Driving from "../assets/images/driving.mp4";
import Autopark from "../assets/images/Autopark.mp4";
import Carvideo from "../assets/images/carvideo.mp4";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Data for slides
const data = [
  {
    videoSrc: Driving,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },

  {
    videoSrc: Autopark,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
];

function FeaturedVideo({ isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="h-[450px] text-black border flex">
                <div className="flex-1 flex justify-center items-center p-4">
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    className="h-[50vh] w-full object-contain"
                  >
                    <source src={d.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center p-4">
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FeaturedVideo;

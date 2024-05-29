import React from "react";
import videointro from "../assets/images/video.mp4";

function Video() {
  return (
    <div className="bg-black">
      <video
        src={videointro}
        autoPlay
        loop
        muted
        className="w-screen h-screen"
      />
    </div>
  );
}

export default Video;

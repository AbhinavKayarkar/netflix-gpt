import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pl-24 pt-[15%] absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <div>
        <p className="text-5xl font-bold">{title}</p>
        <p className="py-2 mt-6 w-1/3">{overview}</p>
      </div>

      <div>
        <button className="p-2 px-6 bg-white text-black mr-1 rounded-md">
          ▶️ Play
        </button>
        <button className="p-2 px-6 bg-gray-500 text-white bg-opacity-70 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

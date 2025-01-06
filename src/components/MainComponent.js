import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (movies === null) return;
  const { original_title, id, overview } = movies[0];

  return (
    <div className="md:pt-0 sm:pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoID={id} />
    </div>
  );
};

export default MainComponent;

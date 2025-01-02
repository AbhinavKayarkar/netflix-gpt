import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailor from "../hooks/useGetMovieTrailor";

const VideoBackground = ({ videoID }) => {
  // get movie tarilor and put it in store.
  useGetMovieTrailor(videoID);
  const trailerKey = useSelector((state) => state?.movies?.trailer?.key);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow=" autoplay;encrypted-media;"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

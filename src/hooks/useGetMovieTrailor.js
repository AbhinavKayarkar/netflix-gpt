import { useEffect } from "react";
import { addMovieTrailor } from "../utils/Slices/movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";

const useGetMovieTrailor = (videoID) => {
  const dispatch = useDispatch();
  const getTrailerFromId = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoID}/videos?language=en-US`,
      MOVIE_OPTIONS
    );
    const json = await data.json();

    const filteredData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addMovieTrailor(trailer));
  };
  useEffect(() => {
    getTrailerFromId();
  }, []);
};

export default useGetMovieTrailor;

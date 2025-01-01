import { useDispatch } from "react-redux";
import { addUpcomimgMovies } from "../utils/Slices/movieSlice";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomimgMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const movies = await data.json();
    dispatch(addUpcomimgMovies(movies.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useUpcomimgMovies;

import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Slices/movieSlice";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      MOVIE_OPTIONS
    );
    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;

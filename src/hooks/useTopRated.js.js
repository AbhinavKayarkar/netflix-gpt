import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/Slices/movieSlice";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const movies = await data.json();
    dispatch(addTopratedMovies(movies.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTopRated;

import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Slices/movieSlice";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      MOVIE_OPTIONS
    );
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  useTrendingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
   
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pt-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>

        <div className="text-white pb-48 mx-48 pt-12  ">Questions? Call 000-800-919-1743 (Toll-Free)
        <ul className="md:grid md:grid-cols-3 gap-10 pt-5 grid grid-cols-2">
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
        </div>
      </div>
 
  );
};
export default SecondaryContainer;

import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

const Movie = () => {
  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovieList({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieList({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieList);
  return (
    <div>
      {movieList.isFetched ? (
        <div className="cards">
          {movieList.data.results.map((movie, index) => (
            <MovieCard
              key={index}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.title}
              relaseDate={movie.release_date}
              imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Movie;

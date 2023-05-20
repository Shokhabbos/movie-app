import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
import Pagination from "../components/Pagination/Pagination";

const Movie = () => {
  const { id } = useParams();

  const [changePage, setChangePage] = useState(parseInt(id) || 1);
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: {},
    totalPage: 1,
    err: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          page: changePage,
        },
      })
      .then((res) =>
        setMovieList({
          isFetched: true,
          data: res.data,
          totalPage: res.data.total_pages,
          err: false,
        })
      )
      .catch((error) =>
        setMovieList({
          isFetched: true,
          data: [],
          totalPage: [],
          err: error,
        })
      );
      navigate(`/movie/${changePage}`)
  }, [changePage, navigate]);

  const handleChanger = (page) => {
    if (page > 0 && page <= movieList.totalPage) {
      setChangePage(page);
    }
    
  };
  console.log(movieList);
  return (
    <div>
      <Pagination
        changePage={changePage}
        setChangePage={handleChanger}
        totalPage={movieList.totalPage}
      />
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleMovie = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovieInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieInfo);
  return (
    <div>
      {movieInfo.isFetched ? (
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.poster_path}`}
            alt=""
          />
          <h2>{movieInfo.data.title}</h2>
          <p> {movieInfo.data.vote_average}</p>
          <p>{movieInfo.data.release_date}</p>
          <p>{movieInfo.data.overview}</p>
          <p>{movieInfo.data.budget}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SingleMovie;

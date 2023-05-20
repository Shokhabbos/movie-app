import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

const Tv = () => {
  const [tv, setTv] = useState([]);
  const tvApi = "https://api.themoviedb.org/3/tv/popular";
  const apikey = "4b7feb4a7688c3c46324165839ad0ffd";

  useEffect(() => {
    fetch(`${tvApi}?api_key=${apikey}`)
      .then((res) => res.json())
      .then((data) => setTv(data));
  }, []);
  console.log(tv.results);
  return (
    <div className="cards">
      {tv.results &&
        tv.results.map((val, i) => (
          <div className="">
            <MovieCard key={i}
            title={val.name}
            rating={val.vote_average}
            imgLink={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
          />
          </div>
           
        ))}
    </div>
  );
};

export default Tv;

import { Link } from "react-router-dom";

const MovieCard = ({ id, title, imgLink, rating, relaseDate }) => {
  return (
    <Link to={`/movie/${id}`} className="card">
      <div className="card__img">
        <img src={imgLink} alt="Card Img" />
      </div>
      <div className="card__content">
        <h2>{title}</h2>
        <span className="relase-date">{relaseDate}</span>
        <span className="rating">{rating}</span>
      </div>
    </Link>
  );
};

export default MovieCard;

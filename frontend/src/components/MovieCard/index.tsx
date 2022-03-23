import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <div className="card-link-container">
        <p>Acessar /movies/{movie.id}</p>
      </div>
      <div className="card-name-container">
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;

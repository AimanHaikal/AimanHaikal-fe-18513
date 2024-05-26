// components/movieGrid.tsx
import MovieCard from "./movieCard";
import { useAppContext } from "../context/appContext";

interface Movie {
  title: string;
  genre: string;
  duration: string;
  viewCount: number;
}

const MovieGrid = ({ movies }: { movies: Movie[] }) => {
  const { showDescription } = useAppContext();

  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div
          key={index}
          className={index === 0 && showDescription ? "first-movie-card" : ""}
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;

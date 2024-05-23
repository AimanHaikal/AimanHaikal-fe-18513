// MovieCard.tsx
import React from "react";

interface MovieCardProps {
  movie: {
    title: string;
    genre: string;
    duration: string;
    viewCount: number;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration}</p>
      <p>Views: {movie.viewCount}</p>
    </div>
  );
};

export default MovieCard;

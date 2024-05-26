// pages/movies.tsx
import React from "react";
import MovieGrid from "../components/movieGrid";
import { useAppContext } from "../context/appContext";

const MoviesPage = () => {
  const movies = [
    {
      title: "The Ring's Lord",
      genre: "Fantasy",
      duration: "1hr 24mins",
      viewCount: 21.3,
    },
    {
      title: "Interspace",
      genre: "Fantasy",
      duration: "1hr 24mins",
      viewCount: 21.3,
    },
    {
      title: "Interspace",
      genre: "Fantasy",
      duration: "1hr 24mins",
      viewCount: 21.3,
    },
    {
      title: "Her & Him",
      genre: "Fantasy",
      duration: "1hr 24mins",
      viewCount: 21.3,
    },
    {
      title: "Lo Lo Land",
      genre: "Fantasy",
      duration: "1hr 24mins",
      viewCount: 21.3,
    },
  ];

  const { showDescription, toggleDescription } = useAppContext();

  return (
    <div className="movie-grid-container">
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "38%",
        }}
      >
        <h1 style={{ textAlign: "left", color: "white", margin: 0 }}>
          {showDescription ? "New Releases" : "Search Results"}
        </h1>
        {showDescription && (
          <a
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              textDecoration: "underline",
              color: "yellow",
            }}
            onClick={toggleDescription}
          >
            View More
          </a>
        )}
      </div>
      <br />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default MoviesPage;

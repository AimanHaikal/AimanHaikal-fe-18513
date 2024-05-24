// pages/movies.tsx
import MovieGrid from "../components/movieGrid";
import { useRouter } from "next/navigation";

const MoviesPage = () => {
  const router = useRouter();
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
          New Releases
        </h1>
        <a
          style={{
            marginLeft: "auto",
            cursor: "pointer",
            textDecoration: "underline",
            color: "yellow",
          }}
          onClick={() => router.push("")}
        >
          View More
        </a>
      </div>
      <br />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default MoviesPage;

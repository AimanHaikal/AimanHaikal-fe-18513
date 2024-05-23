// app/layout.tsx
"use client";

import "./styles/globals.css";
import MovieCard from "./components/movieCard";
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
    <html lang="en">
      <body>
        <Header />

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
          <div className="movie-grid">
            {movies.map((movie, index) => (
              <div
                key={index}
                className={index === 0 ? "first-movie-card" : ""}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

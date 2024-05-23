// app/layout.tsx
"use client";

import "./styles/globals.css";
import { SlEnvolope, SlPhone, SlArrowRight } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";
import MovieCard from "./components/movieCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";

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

  useEffect(() => {
    // Check if window is defined (running on the client-side)
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if ((link as HTMLAnchorElement).getAttribute("href") === path) {
          link.parentElement!.classList.add("active");
        }
      });
    }
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

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

        <footer>
          <div className="footer-on-left">
            <h1>PcariMovie</h1>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <br />
            <p>Join Newsletters</p>
            <div className="newsletter-container">
              <input
                type="email"
                placeholder="Insert your mail here"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <SlArrowRight />{" "}
              </button>
            </div>
          </div>
          <div className="footer-on-right">
            <div className="footer-container">
              <div className="footer-left">
                <div className="footer-link-item">
                  <a className="footer-title-item">Product</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Movies</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">TV Show</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Video</a>
                </div>
              </div>
              <div className="footer-left">
                <div className="footer-link-item">
                  <a className="footer-title-item">Media Group</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Nice Studio</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Nice News</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Nice TV</a>
                </div>
              </div>
              <div className="footer-left">
                <div className="footer-link-item">
                  <a className="footer-title-item">Sitemap</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">About</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Careers</a>
                </div>
                <div className="footer-link-item">
                  <a href="#">Press</a>
                </div>
              </div>
            </div>
            <div className="footer-container-bottom">
              <p>
                <TfiLocationPin color="white" /> 8819 Ohio St. South Gate,
                California 90280
              </p>
              <p>
                <SlEnvolope color="white" /> ourstudio@hello.com
              </p>
              <p>
                <SlPhone color="white" /> +271 386-647-3637
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;

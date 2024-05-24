// header.tsx
import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import Description from "./description";
import SearchForm from "./searchForm";
import PlayButton from "../styles/icons/Play Button";
import { useAppContext } from "../context/appContext";

const Header = () => {
  const { showDescription } = useAppContext();
  React.useEffect(() => {
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
    <header>
      <div className="header-top">
        <div className="logo">
          <a href="/" className="logo-link">
            PcariMovie
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                TV Show
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Video
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-section">
          <SlMagnifier color="white" style={{ marginRight: "50px" }} />
          <VscAccount color="white" style={{ marginRight: "10px" }} />
          <div className="user-name">John Glich</div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">
          <PlayButton />
        </div>
        {showDescription ? <Description /> : <SearchForm />}
      </div>
    </header>
  );
};

export default Header;

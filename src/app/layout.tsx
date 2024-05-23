// app/layout.tsx
import "./styles/globals.css";
import { SlMagnifier } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo">
            <a href="#" className="logo-link">
              PcariMovie
            </a>
          </div>
          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">
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
        </header>
        <main className="main-content">{children}</main>
        <footer>© 2024 Web Assessment</footer>
      </body>
    </html>
  );
};

export default RootLayout;

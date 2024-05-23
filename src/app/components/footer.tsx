// footer.tsx
import { SlEnvolope, SlPhone, SlArrowRight } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";

const Footer = () => {
  return (
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
  );
};

export default Footer;

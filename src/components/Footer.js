import React from "react";
import "./CSS/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="social">
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-facebook-f"></i>
        </li>
      </ul>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="links">
            <div class="item1 footer-link-items">
              <Link to="/Services">
                <h6>Services</h6>
              </Link>
            </div>

            <div class="item2 footer-link-items">
              <Link to="/work">
                <h6>Work</h6>
              </Link>
            </div>

            <div class="item3 footer-link-items">
              <Link to="/innovation">
                <h6>Innovation</h6>
              </Link>
            </div>

            <div class="item4 footer-link-items">
              <Link to="/insights" className="insights">
                <h6>Insights</h6>
              </Link>

              <Link to="/blog" className="footer-drop">
                Blog
              </Link>
              <Link to="/whitepapers" className="footer-drop">
                Whitepapers
              </Link>
            </div>

            <div class="item5 footer-link-items">
              <Link to="/about_us" className="insights">
                <h6>About Us</h6>
              </Link>

              <Link to="/team" className="footer-drop">
                Team
              </Link>
              <Link to="/Careers" className="footer-drop">
                Careers
              </Link>
            </div>

            <div class="item6 footer-link-items">
              <h6>Privacy</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

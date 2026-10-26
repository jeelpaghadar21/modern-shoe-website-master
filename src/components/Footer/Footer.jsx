import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <a href="#" className="logo">
            Comfort<span>Pride</span>
          </a>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>

            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ComfortPride. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

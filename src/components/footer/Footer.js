import React from "react";
import "./Footer.css";
import { greeting, socialMediaLinks } from "../../portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-div">
      <div className="footer-inner">
        <p className="footer-text">
          &copy; {year} <strong>{greeting.sub}</strong> &middot; Built with
          React
        </p>

        <ul className="footer-links">
          {socialMediaLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

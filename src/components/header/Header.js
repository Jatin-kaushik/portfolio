import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { settings, greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const LINKS = [
  { to: "/home", label: "Home" },
  { to: "/education", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

class Header extends Component {
  render() {
    const homeLink = settings.isSplash ? "/splash" : "/home";
    const initials = greeting.sub
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <React.Fragment>
        <SeoHeader />
        <header className="header">
          <div className="header-inner">
            <NavLink to={homeLink} tag={Link} className="logo">
              <span className="logo__mark">{initials}</span>
              <span className="logo__text">
                <span className="logo__name">{greeting.sub}</span>
                <span className="logo__role">Backend &amp; AI Engineer</span>
              </span>
            </NavLink>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn" aria-label="Menu">
              <span className="navicon" />
            </label>

            <ul className="menu">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} tag={Link} activeClassName="is-active">
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  className="menu__cta"
                  activeClassName="is-active"
                >
                  Get in touch
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;

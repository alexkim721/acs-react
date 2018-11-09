import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <NavLink id="logo" to="">
            <div className="logo" />
            <div className="acs">Asian Culture Society</div>
          </NavLink>
          <div id="items">
            <ul>
              <li>
                <NavLink
                  activeClassName="selectedlink"
                  className="navitem"
                  to="/events"
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="selectedlink"
                  className="navitem"
                  to="/news"
                >
                  news
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  activeClassName="selectedlink"
                  className="navitem"
                  to="/gallery"
                >
                  gallery
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  activeClassName="selectedlink"
                  className="navitem"
                  to="/blog"
                >
                  blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="selectedlink"
                  className="navitem"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

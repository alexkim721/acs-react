import React, { Component } from "react";
import "./main.css";

class Subscribe extends Component {
  render() {
    return (
      <section id="subscribe">
        <div className="bg">
          <div className="cover" />
        </div>
        <div className="info">
          <div className="header">Join us!</div>
          <div className="desc">
            <p>
              ACS Meets in the Reading Room every Friday from 4:00PM to 5:00PM.
            </p>
            <p>Time and location may change due to various reasons!</p>
          </div>
          <div className="header-two">
            Stay updated by subscribing to our Newsletter!
          </div>
          <a className="subscribe" href="">
            SUBSCRIBE
          </a>
        </div>
      </section>
    );
  }
}

export default Subscribe;

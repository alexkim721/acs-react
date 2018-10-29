import React, { Component } from "react";
import "./main.css";

class Footer extends Component {
  render() {
    return (
      <section id="foot">
        <div className="container">
          <div className="intro">
            <div className="logo">
              <div className="img" />
              <div className="name">Asian Culture Society</div>
            </div>
            <div className="desc">
              <p>
                Asian Culture Society is a community of RIT students who enjoy
                learning and sharing the history, culture and art of Asian
                countries.
              </p>
            </div>
          </div>
          <div className="meeting">
            <p className="title">MEETINGS</p>
            <p>RIT Student Union Building's 2nd Floor Reading Room</p>
            <p>Fridays from 4:00 PM to 5:00PM</p>
          </div>
          <div className="contact">
            <p className="title">CONNECT</p>
            <p>acsrit@gmail.com</p>
            <a
              href="https://www.facebook.com/pg/acsrit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
            <a
              href="https://www.instagram.com/acsrit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

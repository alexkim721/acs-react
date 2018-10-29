import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div id="general">
            <div className="image" />
            <div className="info">
              <div className="header">What is ACS?</div>
              <div className="desc">
                Asian Culture Society is a community of RIT students who enjoy
                learning and sharing the history, culture and art of Asian
                countries.
              </div>
            </div>
          </div>
          <div id="goals">
            <div className="header">
              <div className="title">Our Goals</div>
              <div className="desc" />
            </div>
            <ul>
              <li>
                <div className="content">
                  <div className="img" id="one" />
                  <div className="content-title">Promote Awareness</div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="img" id="two" />
                  <div className="content-title">Share Culture</div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="img" id="three" />
                  <div className="content-title">Have fun on the way!</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;

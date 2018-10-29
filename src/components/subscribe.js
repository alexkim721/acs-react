import React, { Component } from "react";
import "./main.css";
//import MailchimpSubscribe from "react-mailchimp-subscribe";

//const url =
//"https://chimpstatic.com/mcjs-connected/js/users/da3c091a7daf90a45ede8b55f/7f47a5c2c989f89906823493f.js";
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
          <a
            href="https://mailchi.mp/242e6f750060/acssubscribe"
            target="_blank"
            className="subscribe"
            rel="noopener noreferrer"
          >
            subscribe
            {/* <MailchimpSubscribe url={url} /> */}
          </a>
        </div>
      </section>
    );
  }
}

export default Subscribe;

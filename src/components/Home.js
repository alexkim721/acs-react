import React, { Component } from "react";
import Hero from "./home/hero";
import NewsEvents from "./home/newsevents";
import About from "./home/About";

class Home extends Component {
  componentDidMount() {
    window.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Hero />
        <NewsEvents />
        <div className="divider pagewidth" />
        <About />
      </div>
    );
  }
}

export default Home;

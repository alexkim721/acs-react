import React, { Component } from "react";
import EventHero from "./events/EventHero";
import axios from "axios";
import "./main.css";
import "./events/events.css";
import RenderEvents from "./events/RenderEvents";
// import RenderedEvents from "./data/RenderedEvents";

const apibase =
  "http://clients.alexander-kim.com/acs/wp-json/tribe/events/v1/events";
class Events extends Component {
  state = {
    events: {
      loading: true,
      data: []
    }
  };
  //this component makes it so that it activates when the component first mounts
  componentWillMount() {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}`).then(data => {
      this.setState({
        events: {
          data: data.data.events,
          loading: false
        }
      });
    });
  }
  render() {
    return (
      <div id="events">
        <EventHero />
        <RenderEvents data={this.state.events.data} />
      </div>
    );
  }
}

export default Events;

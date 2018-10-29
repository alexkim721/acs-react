import React, { Component } from "react";
import "./events.css";
import { NavLink } from "react-router-dom";
import renderHTML from "react-render-html";

class RenderEvents extends Component {
  checkImage = image => {
    return image ? image : require("../../images/placeholder-grey.png");
  };
  render() {
    return (
      <div className="container">
        <ul id="renderedevents">
          {this.props.data.map(event => (
            <li key={event.title}>
              <img
                className="image"
                src={this.checkImage(event.image.url)}
                alt={event.title}
              />
              <div className="cont">
                <NavLink className="title" to="">
                  {event.title}
                </NavLink>
                <div className="desc">{renderHTML(event.excerpt)}</div>
                <div className="start">
                  Start:
                  <p className="when">{event.start_date}</p>
                </div>
                <div className="end">
                  End:
                  <p className="when">{event.end_date}</p>
                </div>
                <div className="location">{event.venue.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RenderEvents;

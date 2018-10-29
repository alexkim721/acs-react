import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import renderHTML from "react-render-html";

class EventsSub extends Component {
  checkImage = image => {
    return image ? image : require("../../images/placeholder-grey.png");
  };
  render() {
    return (
      <div id="events">
        <div className="header">UPCOMING EVENTS</div>
        <ul id="homerenderedevents">
          {this.props.data.slice(0, 5).map(event => (
            <li key={event.id}>
              <NavLink className="title" to="">
                {event.title}
              </NavLink>
              <div className="desc">{renderHTML(event.excerpt)}</div>
              <div className="when start">
                <div className="date">{event.start_date}</div>
                <div className="time">6:00 PM</div>
              </div>
              <div className="when end">
                <div className="date">{event.end_date}</div>
                <div className="time">6:00 PM</div>
              </div>
              <div className="location">{event.venue.venue}</div>
            </li>
            // <li key={event.title}>
            //   <img
            //     className="image"
            //     src={this.checkImage(event.image.url)}
            //     alt={event.title}
            //   />
            //   <div className="cont">
            //     <NavLink className="title" to="">
            //       {event.title}
            //     </NavLink>
            //     <div className="desc">{event.title}</div>
            //     <div className="start">
            //       Start:
            //       <p className="when">{event.start_date}</p>
            //     </div>
            //     <div className="end">
            //       End:
            //       <p className="when">{event.end_date}</p>
            //     </div>
            //     <div className="location">{event.venue.venue}</div>
            //   </div>
            // </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventsSub;

import React, { Component } from "react";
import axios from "axios";
import "./home.css";
import "../main.css";
import NewsSub from "./NewsSub";
import EventsSub from "./EventsSub";

const newsapibase = "http://clients.alexander-kim.com/acs/wp-json/wp/v2";
const evapibase =
  "http://clients.alexander-kim.com/acs/wp-json/tribe/events/v1/events";
class NewsEvents extends Component {
  state = {
    events: {
      loading: true,
      data: []
    },
    posts: {
      loading: true,
      data: []
    },
    authors: {
      loading: true,
      data: []
    }
  };
  //this component makes it so that it activates when the component first mounts
  componentWillMount() {
    //string literal => having a variable with a part of a string
    axios.get(`${evapibase}`).then(data => {
      this.setState({
        events: {
          data: data.data.events,
          loading: false
        }
      });
    });
    axios.get(`${newsapibase}/posts?categories=4`).then(data => {
      this.setState({
        posts: {
          data: data.data,
          loading: false
        }
      });
    });
    axios.get(`${newsapibase}/users`).then(data => {
      this.setState({
        authors: { data: data.data, loading: false }
      });
    });
  }
  render() {
    const { posts, authors, events } = this.state;
    return (
      <section id="main">
        <div className="pagewidth">
          {!events.loading && !posts.loading && !authors.loading ? (
            <React.Fragment>
              <NewsSub
                data={this.state.posts.data}
                authors={this.state.authors.data}
              />
              <EventsSub data={this.state.events.data} />
            </React.Fragment>
          ) : (
            <div className="preloader" />
          )}
        </div>
      </section>
    );
  }
}

export default NewsEvents;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import NewsHero from "./news/NewsHero";
import "./main.css";
import "./news/news.css";
import RenderNews from "./news/RenderNews";
// import RenderedNews from "./data/RenderedNews";
import Article from "./news/Article";

const apibase = "https://clients.alexander-kim.com/acs/wp-json/wp/v2";
class News extends Component {
  componentDidMount() {
    window.scrollTop = 0;
  }

  state = {
    posts: {
      loading: true,
      data: []
    },
    authors: { data: [], loading: true }
  };
  //this component makes it so that it activates when the component first mounts
  componentWillMount() {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/posts?categories=4`).then(data => {
      this.setState({
        posts: {
          data: data.data,
          loading: false
        }
      });
    });

    axios.get(`${apibase}/users`).then(data => {
      this.setState({
        authors: { data: data.data, loading: false }
      });
    });
  }
  handlePathChange = path => {
    const slugs = [];
    this.state.posts.data.map(item => slugs.push(item.slug));
    const firstPart = path.split("/")[2];
    if (slugs.includes(firstPart)) {
      return <Article data={this.state.posts.data[slugs.indexOf(firstPart)]} />;
    } else {
      return (
        <div>
          <NewsHero />
          {this.state.posts.loading || this.state.authors.loading ? (
            <div className="preloader" />
          ) : (
            <RenderNews
              data={this.state.posts.data}
              authors={this.state.authors.data}
            />
          )}
        </div>
      );
    }
  };
  render() {
    return (
      <div id="news">
        {this.handlePathChange(this.props.history.location.pathname)}
      </div>
    );
  }
}

export default withRouter(News);

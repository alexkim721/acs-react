import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import renderHTML from "react-render-html";

class NewsSub extends Component {
  checkAuthor = id => {
    return this.props.authors.find(author => {
      return author.id === id;
    }).name;
  };

  checkImage = image => {
    return image ? image : require("../../images/placeholder-grey.png");
  };
  render() {
    return (
      <div id="news">
        <div className="header">RECENT NEWS</div>
        <ul id="renderednews">
          {this.props.data &&
            this.props.data.slice(0, 2).map(news => (
              <li key={news.id}>
                <img
                  className="newsImage"
                  src={this.checkImage(news.acf.header_image)}
                  alt={news.title.rendered}
                />
                <div className="cont">
                  <NavLink className="title" to={"news/" + news.slug}>
                    {news.title.rendered}
                  </NavLink>
                  <div className="desc">
                    {renderHTML(news.content.rendered)}
                  </div>
                  <div className="foot">
                    <div className="auth">{this.checkAuthor(news.author)}</div>
                    <div className="date">{news.date}</div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default NewsSub;

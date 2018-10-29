import React, { Component } from "react";
import renderHTML from "react-render-html";
import "./news.css";

class Article extends Component {
  componentWillUnmount() {
    window.scrollTop = 0;
  }
  componentDidMount() {
    window.scrollTop = 0;
  }
  checkImage = image => {
    return image ? (
      <img src={image} alt={this.props.data.title.rendered} />
    ) : (
      <div />
    );
  };
  render() {
    return (
      <div className="pagewidth">
        <section id="articlehero">
          {this.checkImage(this.props.data.acf.header_image)}
          <div className="articletitle">
            <h1>{this.props.data.title.rendered}</h1>
            <p>
              <span>{this.props.data.acf.author}</span> ● {this.props.data.date}
            </p>
          </div>
        </section>
        <div className="divider" />
        <section className="content">
          {renderHTML(this.props.data.content.rendered)}
        </section>
      </div>
    );
  }
}

export default Article;

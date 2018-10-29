import React, { Component } from "react";
import "./blog.css";
import renderHTML from "react-render-html";

class Blog extends Component {
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
        <section id="articlebloghero">
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

export default Blog;

import React, { Component } from "react";
import "./news.css";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

class RenderNews extends Component {
  state = {
    pageLimit: 6,
    offset: 0,
    pageCount: 0
  };
  componentDidMount() {
    window.scrollTop = 0;
    let pages = this.props.data.length;
    this.setState({ pageCount: Math.ceil(pages / this.state.pageLimit) });
  }
  handlePageClick = data => {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.pageLimit);

    this.setState({ offset });
  };
  checkAuthor = id => {
    return this.props.authors.find(author => {
      return author.id === id;
    }).name;
  };
  checkImage = image => {
    return image ? image : require("../../images/placeholder-grey.png");
  };
  renderData = data => {
    return data
      .slice(this.state.offset, this.state.offset + this.state.pageLimit)
      .map(news => (
        <div className="newsitem" key={news.id}>
          <img
            className="image"
            src={this.checkImage(news.acf.header_image)}
            alt={news.title.rendered}
          />
          <div className="cont">
            <NavLink className="title" to={"news/" + news.slug}>
              {news.title.rendered}
            </NavLink>
            <div className="desc">{news.title.rendered}</div>
            <div className="foot">
              <div className="auth">{this.checkAuthor(news.author)}</div>
              <div className="date">{news.date}</div>
            </div>
          </div>
        </div>
      ));
  };

  render() {
    return (
      <div className="container">
        <div id="renderednews">
          {this.renderData(this.props.data)}
          <ReactPaginate
            previousLabel={
              <img src={require("../../images/prev.png")} alt="prev" />
            }
            nextLabel={
              <img src={require("../../images/next.png")} alt="next" />
            }
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}

export default RenderNews;

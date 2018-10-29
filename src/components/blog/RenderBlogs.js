import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";

class RenderBlogs extends Component {
  state = {
    pageLimit: 4,
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
  checkImage = image => {
    return image ? image : require("../../images/placeholder-grey.png");
  };
  checkAuthor = id => {
    return this.props.authors.find(author => {
      return author.id === id;
    }).name;
  };

  renderData = data => {
    return data
      .slice(this.state.offset, this.state.offset + this.state.pageLimit)
      .map(blogs => (
        <div className="blogitem" key={blogs.id}>
          <img
            className="image"
            src={this.checkImage(blogs.acf.header_image)}
            alt={blogs.title.rendered}
          />
          <div className="cont">
            <NavLink className="title" to={"blog/" + blogs.slug}>
              {blogs.title.rendered}
            </NavLink>
            <div className="desc">{blogs.title.rendered}</div>
            <div className="foot">
              <div className="auth">
                {blogs.acf.author
                  ? blogs.acf.author
                  : this.checkAuthor(blogs.author)}{" "}
                ● {blogs.date}
              </div>
              <div className="date"> </div>
            </div>
          </div>
        </div>
      ));
  };

  render() {
    return (
      <div className="container">
        <div id="renderedblogs">
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

export default RenderBlogs;

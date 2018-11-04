import React from 'react'
import { withRouter } from 'react-router-dom'
import BlogHero from './blog/BlogHero'
import axios from 'axios'
import './main.css'
import './blog/blog.css'
import RenderBlogs from './blog/RenderBlogs'

//import RenderedBlogs from "./data/RenderedBlogs";
import Blog from './blog/Blog'

const apibase = 'http://clients.alexander-kim.com/acs/wp-json/wp/v2'
class Blogs extends React.Component {
  componentDidMount() {
    window.scrollTop = 0
  }

  state = {
    posts: {
      loading: true,
      data: []
    },
    authors: {
      data: [],
      loading: true
    }
  }
  //this component makes it so that it activates when the component first mounts
  componentWillMount() {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/posts?categories=2`).then(data => {
      this.setState({
        posts: {
          data: data.data,
          loading: false
        }
      })
    })

    axios.get(`${apibase}/users`).then(data => {
      this.setState({
        authors: { data: data.data, loading: false }
      })
    })
  }
  handlePathChange = path => {
    const slugs = []
    console.log(this.state)
    this.state.posts.data.map(item => slugs.push(item.slug))
    const firstPart = path.split('/')[2]
    if (slugs.includes(firstPart)) {
      return <Blog data={this.state.posts.data[slugs.indexOf(firstPart)]} />
    } else {
      return (
        <div>
          <BlogHero />
          {this.state.posts.loading || this.state.authors.loading ? (
            <div className="preloader" />
          ) : (
            <RenderBlogs
              data={this.state.posts.data}
              authors={this.state.authors.data}
            />
          )}
        </div>
      )
    }
    // switch (firstPart) {
    //   case slugs:
    //     return <div>hi</div>;
    //   default:
    //     return (
    //       <div>
    //         <BlogHero /> <RenderBlogs data={RenderedBlogs} />
    //       </div>
    //     );
    // }
  }
  render() {
    return (
      <div id="blogs">
        {this.handlePathChange(this.props.history.location.pathname)}
      </div>
    )
  }
}

export default withRouter(Blogs)

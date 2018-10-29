import React, { Component } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Subscribe from "./components/subscribe.js";
import Home from "./components/Home";
import Events from "./components/Events";
import News from "./components/News";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[1];
    switch (firstPart) {
      case "events":
        return <Events />;
      case "news":
        return <News />;
      case "blog":
        return <Blogs />;
      case "contact":
        return <Contacts />;
      case "":
        return <Home />;
      default:
        return <div />;
    }
  };
  render() {
    return (
      <ScrollToTop>
        <div className="App">
          <Header />
          {this.handlePathChange(this.props.history.location.pathname)}
          <Subscribe />
          <Footer />
        </div>
      </ScrollToTop>
    );
  }
}

export default App;

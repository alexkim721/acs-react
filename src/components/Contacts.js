import React, { Component } from "react";
import ContactHero from "./contact/ContactHero";
import axios from "axios";
import "./main.css";
import "./contact/contact.css";
import RenderContacts from "./contact/RenderContacts";
// import RenderedContacts from "./data/RenderedContacts";

const apibase = "http://clients.alexander-kim.com/acs/wp-json/wp/v2";
class Contacts extends Component {
  componentDidMount() {
    window.scrollTop = 0;
  }

  state = {
    contacts: {
      loading: true,
      data: []
    }
  };
  //this component makes it so that it activates when the component first mounts
  componentWillMount() {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/eboard?per_page=100`).then(data => {
      this.setState({
        contacts: {
          data: data.data,
          loading: false
        }
      });
    });
  }
  render() {
    return (
      <div>
        <ContactHero />
        <section id="contact">
          <div className="container">
            <div id="left">
              <div className="title">Need to chat?</div>
              <div className="desc">
                You can catch one of the e-board members at the meetings or
                e-mail one of us directly using the e-mails below. For general
                issues, message <b>acs@gmail.com</b>.
              </div>
            </div>
            <div className="right" />
          </div>
        </section>
        <RenderContacts data={this.state.contacts.data} />
      </div>
    );
  }
}

export default Contacts;

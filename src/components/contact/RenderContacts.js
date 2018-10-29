import React, { Component } from "react";

class RenderContacts extends Component {
  render() {
    return (
      <section id="meetTeam">
        <div className="container">
          <div className="title">meet the team</div>
          <ul id="members">
            {this.props.data
              .reverse()
              .filter(contact => {
                if (!contact.acf.e_hidden) {
                  return true;
                }
                return false;
              })
              .map(contact => (
                <li key={contact.id}>
                  <div className="image">
                    <img
                      src={contact.acf.e_image.url}
                      alt={contact.acf.e_name}
                    />
                  </div>
                  <div className="info">
                    <div className="position">{contact.acf.e_position}</div>
                    <div className="name">{contact.acf.e_name}</div>
                    <div className="email">{contact.acf.e_email}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default RenderContacts;

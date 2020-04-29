import React, { Component } from "react"

class Card extends Component {
  render() {
  let profile = this.props
    return(
      <div className="github-profile">
        <img className="image" src={profile.avatar_url} alt=""/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card

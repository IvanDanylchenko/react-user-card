import React, { Component } from "react";
import "./ProfileCard.module.css";

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "https://yt3.ggpht.com/ytc/AKedOLRF-Tq4cd6u6LcncOGn2dKwNpvvzLSU64X-D1EG=s900-c-k-c0x00ffffff-no-rj",
      firstName: "Will",
      lastName: "Smith",
      socialMediaName: "@WSmith",
      tweets: "1777",
      followers: "5468",
      likesCount: 1565,
    };
  }

  increment = (e) => {
    const { likesCount } = this.state;
    this.setState({ likesCount: likesCount + 1 });
  };

  render() {
    const {
      src,
      firstName,
      lastName,
      socialMediaName,
      tweets,
      followers,
      likesCount,
    } = this.state;
    return (
      <>
        <article>
          <header>
            <img src={src} alt={`${firstName} ${lastName}`} />
            <h1>
              {firstName} {lastName}
            </h1>
            <p>{socialMediaName}</p>
          </header>
          <footer>
            <div>
              <h2>Tweets</h2>
              <h3>{tweets}</h3>
            </div>
            <div>
              <button onClick={this.increment}>Like</button>
              <h2>Likes</h2>
              <h3>{likesCount}</h3>
            </div>
            <div>
              <h2>Followers</h2>
              <h3>{followers}</h3>
            </div>
          </footer>
        </article>
      </>
    );
  }
}

export default ProfileCard;

import "./UserCard.module.css";

function UserCard(props) {
  return (
    <article>
      <header>
        <img src={props.userInfo.src} alt={props.userInfo.socialMediaName} />
        <h1>{`${props.userInfo.firstName} ${props.userInfo.lastName}`}</h1>
        <p>{props.userInfo.socialMediaName}</p>
      </header>
      <footer>
        <div>
          <h2>Tweets</h2>
          <h3>{props.userInfo.tweets}</h3>
        </div>
        <div>
          <h2>Likes</h2>
          <h3>{props.userInfo.following}</h3>
        </div>
        <div>
          <h2>Followers</h2>
          <h3>{props.userInfo.followers}</h3>
        </div>
      </footer>
    </article>
  );
}

export default UserCard;

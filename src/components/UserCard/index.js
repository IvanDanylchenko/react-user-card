import styles from './UserCard.module.css';

function UserCard (props) {
  const {
    userInfo: {
      src,
      firstName,
      lastName,
      socialMediaName,
      tweets,
      following,
      followers,
    },
  } = props;
  return (
    <article className={styles.userCard}>
      <header className={styles.userHeaderCard}>
        <img className={styles.userImg} src={src} alt={socialMediaName} />
        <h1>{`${firstName} ${lastName}`}</h1>
        <p>{socialMediaName}</p>
      </header>
      <footer className={styles.userFooterCard}>
        <div>
          <h2>Tweets</h2>
          <h3>{tweets}</h3>
        </div>
        <div>
          <h2>Likes</h2>
          <h3>{following}</h3>
        </div>
        <div>
          <h2>Followers</h2>
          <h3>{followers}</h3>
        </div>
      </footer>
    </article>
  );
}

export default UserCard;

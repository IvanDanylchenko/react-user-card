import "./App.css";
import ProfileCard from "./components/ProfileCard";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <UserCard
        userInfo={{
          src: "https://yt3.ggpht.com/ytc/AKedOLRF-Tq4cd6u6LcncOGn2dKwNpvvzLSU64X-D1EG=s900-c-k-c0x00ffffff-no-rj",
          firstName: "Will",
          lastName: "Smith",
          socialMediaName: "@WSmith",
          tweets: "1777",
          following: "2546",
          followers: "5468",
        }}
      />
      <ProfileCard />
    </>
  );
}

export default App;

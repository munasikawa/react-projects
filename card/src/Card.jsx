import profilePic from "./assets/profile.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Samuel Muna</h2>
      <p className="card-text">
        I am a React developer and house music playlists
      </p>
    </div>
  );
};

export default Card;

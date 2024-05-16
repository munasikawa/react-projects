const ProfilePicture = () => {
  const imageUrl = "./src/assets/profile.jpg";
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img src={imageUrl} onClick={(e) => handleClick(e)} alt="profile image" />
  );
};

export default ProfilePicture;

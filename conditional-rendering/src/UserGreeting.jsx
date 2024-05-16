import propTypes from "prop-types";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
};

UserGreeting.propTypes = {
  username: propTypes.string,
  isLoggedIn: propTypes.bool,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;

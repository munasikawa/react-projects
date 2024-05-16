import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Sam" />
    </>
  );
}

export default App;

import { useState } from "react";

type Props = {};

const LoggedIn = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;

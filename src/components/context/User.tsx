import React, { useContext } from "react";
import { UserContext } from "./UserContext";

type Props = {};

function User({}: Props) {
  const userContext = useContext(UserContext);
  const handleLogIn = () => {
    if (userContext) {
      userContext.setUser({
        name: "Cecilia Nguyen",
        email: "cecilia@gmail.com",
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
}

export default User;

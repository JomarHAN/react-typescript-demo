import React, { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogIn = () => {
    setUser({ email: "email@gmail.com", name: "Nam" });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log in</button>
      <button onClick={handleLogOut}>Log out</button>
      <h2>
        {user
          ? `User's name is ${user.name} and email is ${user.email}`
          : `User logged out`}
      </h2>
    </div>
  );
};

export default User;

import React from "react";

export type ProfileProps = {
  name: string;
  setIsLoggedIn: (value: boolean) => void;
};

const Profile = ({ name, setIsLoggedIn }: ProfileProps) => {
  return (
    <div>
      <h2>User'Name is {name}</h2>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </div>
  );
};

export default Profile;

import React from "react";

type Props = {
  setIsLoggedIn: (value: boolean) => void;
};

const Login = ({ setIsLoggedIn }: Props) => {
  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Log In</button>
    </div>
  );
};

export default Login;

import React, { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type Props = {
  name: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  component: ComponentType<ProfileProps>;
};

const Private = ({
  name,
  isLoggedIn,
  setIsLoggedIn,
  component: Component,
}: Props) => {
  if (isLoggedIn) {
    return <Component name={name} setIsLoggedIn={setIsLoggedIn} />;
  } else {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default Private;

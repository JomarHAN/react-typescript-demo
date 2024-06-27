import React from "react";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const ButtonCustom = ({ variant, children }: Props) => {
  return <button className={`bg-${variant}`}>{children}</button>;
};

export default ButtonCustom;

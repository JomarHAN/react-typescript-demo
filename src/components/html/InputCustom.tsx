import React from "react";

type InputCustomProps = React.ComponentProps<"input">;

const InputCustom = ({ ...rest }: InputCustomProps) => {
  return <input {...rest} />;
};

export default InputCustom;

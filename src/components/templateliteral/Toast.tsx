import React from "react";

type HorizontalType = "left" | "center" | "right";
type VerticalType = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalType}-${VerticalType}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast at - {position}</div>;
};

export default Toast;

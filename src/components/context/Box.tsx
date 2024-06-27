import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const { secondary } = useContext(ThemeContext);
  return (
    <div style={{ background: secondary.main, color: secondary.text }}>
      Theme context here!
    </div>
  );
};

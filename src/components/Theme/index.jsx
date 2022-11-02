import { useEffect, useState } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./Theme.scss";

function Theme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div
      className="last-item"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <img src={moon} alt="dark theme" />
      ) : (
        <img className="light" src={sun} alt="light theme" />
      )}
    </div>
  );
}

export default Theme;

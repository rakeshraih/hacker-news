import { useEffect, useState } from "react";

function Container() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      +
    </div>
  );
}

export default Container;

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import sun from "./sun.svg";
import moon from "./moon.svg";

import "./Theme.scss";

function Theme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const changeTheme = useCallback(
    (theme) => {
      dispatch({
        type: "CHANGE_THEME",
        theme: theme,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className="last-item"
      onClick={() => {
        changeTheme(theme === "light" ? "dark" : "light");
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

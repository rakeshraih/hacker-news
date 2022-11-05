import Theme from "../Theme";
import Filter from "../Filter";

import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <h1>Hacker News</h1>
      <Filter />
      <Theme></Theme>
    </header>
  );
}

export default Header;

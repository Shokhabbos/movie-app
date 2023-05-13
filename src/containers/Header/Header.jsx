import { Link } from "react-router-dom";

import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="site-holder">
             <span>Movie</span>
            </Link>
          </div>
          <nav className="header__center">
            <ul>
              <li>
                <Link className="header__link" to="/">Home</Link>
              </li>
              <li>
                <Link className="header__link" to="/movie">Movie</Link>
              </li>
              <li>
                <Link className="header__link" to="/tv">TV</Link>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <form>
              <input type="search" placeholder="Input here..." />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

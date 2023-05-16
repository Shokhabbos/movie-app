import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import "./Header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() =>{
    if(searchValue.length > 0){
      navigate(`/search/${searchValue}`)
    } else{
      navigate(`/`)
    }
  },[searchValue])
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`)
  };

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
                <Link className="header__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/movie">
                  Movie
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/tv">
                  TV
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearchChange}
                value={searchValue}
                placeholder="Input here..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

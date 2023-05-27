import { useState } from "react";
import Logo from "../asserts/Logo";

const getUserNameFromLocalStorage = () => {
  let username = localStorage.getItem("username");
  return username ? username : "";
};

const authenticateUser = () => {
  // API call to check authentication
  return getUserNameFromLocalStorage().length > 0;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authenticateUser());

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("username", "user123");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <figure className="logo__container">
          <Logo />
        </figure>
        <nav className="nav">
          <ul className="nav__list">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button onClick={handleLogin}>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

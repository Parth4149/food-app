import Logo from "../asserts/Logo";

const getUserNameFromLocalStorage = () => {
  let username = localStorage.getItem("username");
  return username ? JSON.parse(username) : "";
};

const authenticateUser = () => {
  // API call to check authentication
  return getUserNameFromLocalStorage().length > 0;
};

const Header = () => {
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
              {authenticateUser() ? (
                <button>Logout</button>
              ) : (
                <button>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

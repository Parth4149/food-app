import Logo from "../asserts/Logo";

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
            <li>Service</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

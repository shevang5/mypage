import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <menu className="menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li className="cta">
          <a href="#contact">Contact</a>
        </li>
      </menu>
    </nav>
  );
};

export default NavBar;

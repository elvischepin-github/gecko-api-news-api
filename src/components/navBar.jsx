import "../styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="../src/assets/cn.png" alt="logo" id="logo" />
      </div>
      <div className="name">
        <p id="name">Gecko&News</p>
      </div>
      <div className="tabs">
        <a href="" className="links" data-nav>
          About us
        </a>
        <a href="" className="links" data-nav>
          News
        </a>
        <a href="" className="links" data-nav>
          Crypto
        </a>
      </div>
      <div className="sign">
        <a href="" id="button">
          Sign in
        </a>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleMenu} />
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="" className="mobile-link" data-custom>
          About us
        </a>
        <a href="" className="mobile-link" data-custom>
          News
        </a>
        <a href="" className="mobile-link" data-custom>
          Crypto
        </a>
        <a href="" className="mobile-link" data-custom>
          Sign in
        </a>
      </div>
    </div>
  );
}

export default NavBar;

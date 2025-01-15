import "./navBarContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBarContainer() {
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
        <a href="#about-us" className="links" data-nav>
          About Us
        </a>
        <a href="#news" className="links" data-nav>
          News
        </a>
        <a href="#crypto" className="links" data-nav>
          Crypto
        </a>
        <a href="#top" className="links" data-nav>
          Top
        </a>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleMenu} />
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#about-us" className="mobile-link" data-custom>
          About us
        </a>
        <a href="#news" className="mobile-link" data-custom>
          News
        </a>
        <a href="#crypto" className="mobile-link" data-custom>
          Crypto
        </a>
        <a href="#top" className="mobile-link" data-custom>
          Top
        </a>
      </div>
    </div>
  );
}

export default NavBarContainer;

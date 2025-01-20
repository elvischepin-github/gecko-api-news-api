import "./navBarContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

function NavBarContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -250 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -250 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="container"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.div className="logo" variants={itemVariants}>
        <img src="../src/assets/cn.png" alt="logo" id="logo" />
      </motion.div>
      <motion.div className="name" variants={itemVariants}>
        <p id="name">Gecko&News</p>
      </motion.div>
      <motion.div className="tabs" variants={containerVariants}>
        <motion.a href="#about-us" className="links" data-nav variants={itemVariants}>
          About Us
        </motion.a>
        <motion.a href="#news" className="links" data-nav variants={itemVariants}>
          News
        </motion.a>
        <motion.a href="#crypto" className="links" data-nav variants={itemVariants}>
          Crypto
        </motion.a>
        <motion.a href="#top" className="links" data-nav variants={itemVariants}>
          Top
        </motion.a>
      </motion.div>
      <motion.div className="icon-container" variants={itemVariants}>
        <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleMenu} />
      </motion.div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#about-us" className="mobile-link" data-custom>
          About Us
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
      </motion.div>
  );
}

export default NavBarContainer;

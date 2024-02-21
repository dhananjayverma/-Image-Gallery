import '../styles/Navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar-nav ${showMenu ? 'active' : ''}`}>
        <li className="nav-item"><FontAwesomeIcon icon={faHome} /> Home</li>
        <li className="nav-item"><FontAwesomeIcon icon={faImages} /> Gallery</li>
        <li className="nav-item"><FontAwesomeIcon icon={faEnvelope} /> Contact</li>
        <li className="nav-item"><FontAwesomeIcon icon={faInfoCircle} /> About</li>
      </ul>
    </nav>
  );
}

export default Navbar;

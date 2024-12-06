import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci"; // Importa el ícono de menú
import logo from '../assets/images/logo3.png';  // Importa tu logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Membership</Link></li>
        <li><Link to="#">Events</Link></li>
        <li><Link to="#">Contacts</Link></li>
      </ul>
      <div className="right-content">
        <div
          id="menu-icon"  // Aquí colocas el id para el icono del menú
          onClick={handleMenuToggle}
        >
          <CiMenuBurger size={30} />
        </div>
        <Link to="/login" className="nav-btn">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;

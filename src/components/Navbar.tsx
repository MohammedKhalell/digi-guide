import React from 'react';
import '../styles/Navbar.scss';

interface NavbarProps {
  onToggleSidebar: () => void;
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onLogoClick }) => {
  return (
    <div className="navbar">
      <div className="hamburger-menu" onClick={onToggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo" onClick={onLogoClick}>
        <img src="https://digitinary.com/wp-content/uploads/2024/04/Digitinary-Logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
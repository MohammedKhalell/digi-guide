import React from 'react';
import '../styles/Navbar.scss';
import digi from "./Digitinary-white.png"
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
        <img src={digi} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
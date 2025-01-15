import React from 'react';
import '../styles/Navbar.scss';

interface NavbarProps {
  onLogoClick: () => void;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick, onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={onLogoClick}>
        <img src="https://digitinary.com/wp-content/uploads/2024/04/Digitinary-Logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      </div>
    </nav>
  );
};

export default Navbar;
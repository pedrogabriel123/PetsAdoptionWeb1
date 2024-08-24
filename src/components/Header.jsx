import React from 'react';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header style={{ backgroundColor: '#4CAF50', padding: '10px 0', textAlign: 'center' }}>
      <img src={logo} alt="Logo PetsAdoption" style={{ height: '50px' }} />
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 20px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li style={{ margin: '0 20px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

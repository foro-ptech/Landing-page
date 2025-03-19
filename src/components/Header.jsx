import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Mi Sitio Web</h1>
      <nav>
        <a className='link' href=''>item 1</a>
        <a className='link' href=''>item 2</a>
        <a className='link' href=''>item 3</a>
      </nav>
    </header>
  );
};

export default Header;
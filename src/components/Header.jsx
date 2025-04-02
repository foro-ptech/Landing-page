import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Foro P-tech</h1>
      <nav>
        <a className='link' href='#form'>
          <button className='btn'>
            Inicia ahora
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
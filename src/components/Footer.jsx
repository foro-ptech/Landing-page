import React from 'react';
import '../styles/Footer.css';
import facebook from '/facebook.png'
import insta from '/instagram.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='contact'>
        <h4 className='contact-h4'>Contáctanos</h4>
        <p className='footer-p'>Teléfono: <a href="">33 1171 3593</a></p>
        <p className='footer-p'>Correo: <a href="">adriel.andrade1407@alumnos.udg.mx</a></p>
      </div>
    </footer>
  );
};

export default Footer;
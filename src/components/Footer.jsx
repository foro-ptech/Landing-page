import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className='contact-h4'>Contact us</h4>
      <div className='contact'>
        <p className='footer-p'>Phone <br /><a href="">33 1234 5678</a></p>
        <p className='footer-p'>Email <br /><a href="">hello@reallygreatsite.com</a></p>
        <div className='social-div'>
          <p className='social'>Social</p>
          <img src="" alt="" /><img src="" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
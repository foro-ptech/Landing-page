import React from 'react';
import '../styles/Footer.css';
import facebook from '/facebook.png'
import insta from '/instagram.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='contact'>
        <h4 className='contact-h4'>Contact us</h4>
        <p className='footer-p'>Phone <br /><a href="">33 1234 5678</a></p>
        <p className='footer-p'>Email <br /><a href="">hello@reallygreatsite.com</a></p>
      </div>
      <div className='social-div'>
          <h4 className='contact-h4'>Social</h4>
          <div>
            <a href="facebook.com"><img src={facebook} alt="" className='icon'/></a>
            <a href="instagram.com"><img src={insta} alt="" className='icon'/></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
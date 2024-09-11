import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'black' : 'transparent'}`}>
      <div className='header--logo'>
        <a href="/">
          <img src="./public/LogoGiovanne.png" alt="" />
        </a>
      </div>
      <div className='header--logo'>
        <a href="/">
          <img className='user' src="./public/user.png" alt="" />
        </a>
      </div>
    </header>

  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // You're currently scrolling down
      } else {
        setIsScrolled(false); // You're at the top of the page
      }
    };

    // Initialize isScrolled based on the initial scroll position
    setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${isScrolled ? 'blurred' : 'transparent'}`}>
        <div className="container">
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                <i className="fa-solid fa-address-card"></i> About
                </a>
              </li>
              {/* Add more navbar items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;


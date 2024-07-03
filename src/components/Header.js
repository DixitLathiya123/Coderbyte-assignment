import React, { useEffect, useState } from 'react';
import '../assets/styles/Header.css';

const Header = ({ onSearchIconClick, onBackButtonClick, showBackButton }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <span
        className="material-icons icon"
        onClick={onBackButtonClick}
        style={{ visibility: showBackButton ? 'visible' : 'hidden' }}
      >
        arrow_back
      </span>
      <div className="title">Romantic Comedy</div>
      <span className="material-icons icon" onClick={onSearchIconClick}>search</span>
    </div>
  );
};

export default Header;

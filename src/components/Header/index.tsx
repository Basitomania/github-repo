import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-main-text">Trending</div>
      <div className="header-sub-text">See what the github community is most excited about today</div>
    </div>
  );
};

export default Header;

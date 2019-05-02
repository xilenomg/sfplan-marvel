import React from 'react';
import { Link } from 'react-router-dom';

// Logo
import Logo from '../../logo.svg';

// Styles
import './Header.scss';

const Header = props => {
  return (
    <div className="Header">
      <div className="Header-left">
        <Link to="/">
          <img
            src={Logo}
            alt="marvel-softplan-logo"
            title="Marvel Softplan Logo"
          />
        </Link>
      </div>
      <div className="Header-right">
        <Link to="/create" className="btn btn-primary">
          Create Character
        </Link>
        <Link to="/list" className="btn btn-secondary">
          View Saved Characters List
        </Link>
      </div>
    </div>
  );
};
export default Header;

import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__logo">
          <div className="nav-wrapper">
            <NavLink
              to="/"
              className="header__logo-brend"
              data-testid="main-link"
            >
              Avia
            </NavLink>
            <NavLink to="/info" className="nav__icons-list">
              Info
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
export { Header };

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/crown.svg';

const Header = () => (
  <header className="flex justify-between w-full header">
    <Link className="h-full logo" to="/">
      <Logo />
    </Link>
    <nav className="flex items-center justify-end w-1/2 h-full">
      <Link className="nav-item py-2.5 uppercase" to="/shop">
        Shop
      </Link>
      <Link className="nav-item py-2.5 uppercase" to="/contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;

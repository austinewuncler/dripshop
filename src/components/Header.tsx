import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/crown.svg';
import { auth } from '../firebase/auth';

type HeaderProps = { currentUser: any };

const Header = ({ currentUser }: HeaderProps) => (
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
      {currentUser ? (
        <div
          role="button"
          className="nav-item py-2.5 uppercase cursor-pointer"
          onClick={() => signOut(auth)}
          onKeyDown={() => {}}
          tabIndex={0}
        >
          Sign Out
        </div>
      ) : (
        <Link className="nav-item py-2.5 uppercase" to="/signin">
          Sign In
        </Link>
      )}
    </nav>
  </header>
);

export default Header;

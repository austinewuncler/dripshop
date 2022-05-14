import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/crown.svg';
import { auth } from '../firebase/auth';

type HeaderProps = { currentUser: any };

const Header = ({ currentUser }: HeaderProps) => (
  <header className="flex items-center justify-between w-full h-16">
    <Link to="/">
      <Logo />
    </Link>
    <nav className="flex items-center justify-end gap-7">
      <Link className="uppercase" to="/shop">
        Shop
      </Link>
      <Link className="uppercase" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div
          role="button"
          className="uppercase cursor-pointer"
          onClick={() => signOut(auth)}
          onKeyDown={() => {}}
          tabIndex={0}
        >
          Sign Out
        </div>
      ) : (
        <Link className="uppercase" to="/auth">
          Sign In
        </Link>
      )}
    </nav>
  </header>
);

export default Header;

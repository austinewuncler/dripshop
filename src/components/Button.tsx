import React, { ComponentPropsWithoutRef } from 'react';

type ButtonProps = { isGoogle?: boolean } & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, type, onClick, isGoogle }: ButtonProps) => (
  <button
    className={`${
      isGoogle ? 'google-sign-in' : ''
    } w-auto font-bold uppercase button`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = { isGoogle: false };

export default Button;

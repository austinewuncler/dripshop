import React, { ComponentPropsWithoutRef } from 'react';

type ButtonProps = { isGoogle?: boolean } & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, type, onClick, isGoogle }: ButtonProps) => (
  <button
    className={`${
      isGoogle ? 'google-sign-in' : ''
    } w-auto font-bold uppercase button h-12 py-0 px-9`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = { isGoogle: false };

export default Button;

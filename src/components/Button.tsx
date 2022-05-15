import React, { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  isGoogle?: boolean;
  inverted?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({
  children,
  type,
  onClick,
  isGoogle,
  inverted,
}: ButtonProps) => (
  <button
    className={`${isGoogle ? 'google-sign-in' : ''} ${
      inverted ? 'inverted' : ''
    } w-auto font-bold uppercase button h-12 py-0 px-9`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = { isGoogle: false, inverted: false };

export default Button;

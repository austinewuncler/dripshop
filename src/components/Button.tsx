import React, { ComponentPropsWithoutRef } from 'react';

const Button = ({
  children,
  type,
  onClick,
}: ComponentPropsWithoutRef<'button'>) => (
  <button
    className="w-auto font-bold uppercase button"
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

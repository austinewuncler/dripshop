import React, { ComponentPropsWithoutRef } from 'react';

const Button = ({ children, type }: ComponentPropsWithoutRef<'button'>) => (
  <button
    className="w-auto font-bold uppercase button"
    type={type === 'submit' ? 'submit' : 'button'}
  >
    {children}
  </button>
);

export default Button;

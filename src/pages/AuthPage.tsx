import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const AuthPage = () => (
  <div className="flex justify-between auth-page">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default AuthPage;

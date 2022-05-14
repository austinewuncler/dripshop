import { Form, Formik } from 'formik';
import React from 'react';

import Button from './Button';
import FormInputField from './FormInputField';

const initialValues = { email: '', password: '' };

const SignInForm = () => (
  <div className="flex flex-col sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <FormInputField type="email" name="email" label="email" required />
        <FormInputField
          type="password"
          name="password"
          label="password"
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Formik>
  </div>
);

export default SignInForm;

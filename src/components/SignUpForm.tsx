import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Formik } from 'formik';
import React from 'react';

import { auth } from '../firebase/auth';
import saveUserProfile from '../firebase/database';
import Button from './Button';
import FormInputField from './FormInputField';

const initialValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignInForm = () => (
  <div className="flex flex-col auth">
    <h2>I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ displayName, email, password }, { resetForm }) => {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await saveUserProfile(user, { displayName });
        } catch (error: any) {
          throw new Error(error.message);
          resetForm({ values: initialValues });
        }
      }}
    >
      <Form>
        <FormInputField
          type="text"
          name="displayName"
          label="Display Name"
          required
        />
        <FormInputField type="email" name="email" label="Email" required />
        <FormInputField
          type="password"
          name="password"
          label="Password"
          required
        />
        <FormInputField
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  </div>
);

export default SignInForm;

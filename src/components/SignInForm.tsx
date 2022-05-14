import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Formik } from 'formik';
import React from 'react';

import { auth, signInWithGoogle } from '../firebase/auth';
import Button from './Button';
import FormInputField from './FormInputField';

const initialValues = { email: '', password: '' };

const SignInForm = () => (
  <div className="flex flex-col w-96 gap-11">
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
    </div>
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ email, password }, { resetForm }) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          resetForm({ values: initialValues });
        }
      }}
    >
      <Form className="flex flex-col gap-11">
        <FormInputField type="email" name="email" label="Email" required />
        <FormInputField
          type="password"
          name="password"
          label="Password"
          required
        />
        <div className="flex justify-between">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogle>
            Sign In With Google
          </Button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default SignInForm;

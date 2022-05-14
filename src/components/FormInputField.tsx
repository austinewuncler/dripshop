/* eslint-disable react/jsx-props-no-spreading */
import { FieldHookConfig, useField } from 'formik';
import React from 'react';

type FormInputFieldProps = { label: string } & FieldHookConfig<string>;

const FormInputField = ({
  label,
  name,
  type,
  required,
}: FormInputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative form-input-field">
      <div
        className={`${
          meta.value.length ? 'shrink' : ''
        } absolute font-normal pointer-events-none label`}
      >
        {label}
      </div>
      <input
        className="block w-full input"
        type={type}
        required={required}
        {...field}
      />
    </div>
  );
};

export default FormInputField;

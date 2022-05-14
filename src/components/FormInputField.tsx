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
    <div className="relative mx-0 form-input-field">
      <div
        className={`${
          meta.value.length ? 'shrink' : ''
        } absolute font-normal pointer-events-none top-2.5 left-1 label`}
      >
        {label}
      </div>
      <input
        className="block w-full mx-0 input py-2.5 pr-2.5 pl-1"
        type={type}
        required={required}
        {...field}
      />
    </div>
  );
};

export default FormInputField;

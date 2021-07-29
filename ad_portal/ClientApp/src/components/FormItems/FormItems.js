import React from 'react';
import { useField } from 'formik';
import InputWrapper from './InputWrapper/InputWrapper';
import { Input } from '../UI/Inputs/Input/Input';

export const FormText = (props) => {
  const { className, note, ...settings } = props;
  const [field, meta, form] = useField(props);

  return (
    <InputWrapper className={className} meta={meta} note={note}>
      <Input {...field} onChange={form.setValue} {...settings} />
    </InputWrapper>
  );
};


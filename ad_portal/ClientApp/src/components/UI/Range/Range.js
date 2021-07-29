import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import style from './Range.module.scss';

import { FormText } from '../../FormItems/FormItems';
import { Button } from '../../UI/Button/Button';
import { classes } from '../../../services/utils';

export const Range = ({ label, handlePrice }) => {
  const onSubmit = async (values, { resetForm, setErrors }) => {
    const { from, to } = values;
    handlePrice(from, to)
  };

  const initialValues = {
    from: 0,
    to: 100,
  };

  const validationSchema = Yup.object().shape({
    from: Yup.number()
      .integer(),
    to: Yup.number()
      .integer().moreThan(Yup.ref("from"), 'Cena musí být vyšší než počáteční.')
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur={false}>
      {({ isSubmitting, isValid, values }) => (
        <Form>
          <div className="h-display-flex">
            <FormText type="number" placeholder="Od" name="from" label={label} className="h-mr-05" />
            <FormText type="number" placeholder="Do" name="to" />
            <Button theme="blue-outline" type="submit" className={style.submit}>Ok</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
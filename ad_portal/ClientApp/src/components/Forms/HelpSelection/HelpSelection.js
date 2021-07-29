import React from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

import { classes } from '../../../services/utils';

import style from './HelpSelection.module.scss';

import InputWrapper from '../../FormItems/InputWrapper/InputWrapper';
import { osSelectionOptions, versionOptions } from '../../../Options';
import { Button } from '../../UI/Button/Button';

export const HelpSelection = ({ handleSelection }) => {
  const onSubmit = async (values, { resetForm, setErrors }) => {
    handleSelection(values);
  };

  const initialValues = {
    os: '',
    model: '',
  };

  const validationSchema = Yup.object().shape({
    model: Yup.string().required('Vyplňte informaci').transform((opt) => opt.value),
    os: Yup.string().required('Vyplňte informaci').transform((opt) => opt.value),
  })

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} enableReinitialize onSubmit={onSubmit} validateOnBlur={false}>
      {({ isSubmitting, isValid, errors, touched, values, setFieldValue, setFieldTouched, handleChange }) => (
        <Form>
          <div className="container-row center-lg">
            <div className={classes([style.container, 'col-lg-5'])}>
              <div>
                <label htmlFor="os">
                  Kategorie
                </label>
                <Field name="os" control="os" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <InputWrapper meta={meta}>
                      <Select
                        placeholder={<div className={style['is-placeholder']}>Operační systém</div>}
                        value={values.os}
                        onChange={option => setFieldValue('os', option)}
                        options={osSelectionOptions}
                      />
                    </InputWrapper>
                  )}
                </Field>
              </div>
              <div className="h-mt-1">
                <label htmlFor="model">
                  Znám model počítače
                </label>
                <Field name="model" control="model" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <InputWrapper meta={meta}>
                      <Select
                        placeholder={<div className={style['is-placeholder']}>Model počítače</div>}
                        value={values.model}
                        onChange={option => setFieldValue('model', option)}
                        options={versionOptions}
                      />
                    </InputWrapper>
                  )}
                </Field>
              </div>
              <Button theme="primary" type="submit" className={style.submit}>Další</Button>
            </div>
          </div>
        </Form>
      )}
    </Formik >
  )
}
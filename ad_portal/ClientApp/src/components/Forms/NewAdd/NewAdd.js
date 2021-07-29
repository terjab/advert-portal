import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

import { fileToBase64 } from '../../../services/utils';

import style from './NewAdd.module.scss';

import { FormText } from '../../FormItems/FormItems';
import { Button } from '../../UI/Button/Button';
import InputWrapper from '../../FormItems/InputWrapper/InputWrapper';

const categoryOptions = [
    { label: "Notebook", value: "notebook" },
];

const typeOptions = [
  { label: "Nabídka", value: "offer" },
  { label: "Poptávka", value: "demand" },
]

const conditionOptions = [
  { label: "Nový", value: "new" },
  { label: "Dobrý", value: "good" },
  { label: "Zachovalý", value: "preserved" },
  { label: "Špatný", value: "bad" },
]

export const NewAd = ({ showSpec, ad, addAd }) => {
  const onSubmit = async (values, { resetForm, setErrors }) => {
    showSpec()
    addAd({
      title: values.title,
      category: values.category,
      photos: values.photos,
      type: values.type,
      city: values.city,
      price: values.price,
      description: values.description,
      condition: values.condition,
    })
  };

  const initialValues = {
    title: ad ? ad.title : '',
    category: ad ? ad.category : '',
    photos: ad ? ad.photos : [],
    type: ad ? ad.type : '',
    city: ad ? ad.city : '',
    price: ad ? ad.price : '',
    description: ad ? ad.description : '',
    condition: ad ? ad.condition : '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Vyplňte titulek'),
    category: Yup.string().required('Vyplňte kategorii').transform((opt) => opt.value),
    photos: Yup.array().min(1, 'Vyberte fotky'),
    type: Yup.string().required('Vyplňte typ inzerátu').transform((opt) => opt.value),
    city: Yup.string().required('Vyplňte město'),
    price: Yup.string().required('Vyplňte cenu'),
    description: Yup.string().required('Vyplňte popis'),
    condition: Yup.string().required('Vyplňte stav').transform((opt) => opt.value),
  });

  const handleImg = (file, setFieldValue, values) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = x => {
        setFieldValue('images', values.photos.push({
          fileToBase64: x.target.result,
        }))
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} enableReinitialize onSubmit={onSubmit} validateOnBlur={false}>
      {({ isValid, values, setFieldValue }) => (
        <Form>
          <div className="container-row center-lg">
            <h3 className="h-text-center h-mb-2">Nový inzerát</h3>
            <div className="col-lg-4 h-mb-1">
              <FormText type="text" placeholder="Titulek" name="title" label="Titulek" />
            </div>
            <div className="col-lg-4">
              <label htmlFor="category">
                Kategorie
              </label>
              <Field name="category" control="category" className={style['edit-select']}>
                {({ field, form, meta }) => (
                  <InputWrapper meta={meta}>
                    <Select
                      placeholder={<div className={style['is-placeholder']}>Kategorie</div>}
                      value={values.category}
                      onChange={option => setFieldValue('category', option)}
                      options={categoryOptions}
                    />
                  </InputWrapper>
                )}
              </Field>
            </div>
          </div>
          <div className="container-row center-lg h-mb-1">
            <div className="col-lg-4">
              <FormText type="text" placeholder="Cena" name="price" label="Cena" />
            </div>
            <div className="col-lg-4">
              <FormText type="text" placeholder="Město" name="city" label="Město" />
            </div>
          </div>
          <div className="container-row center-lg h-mb-1">
            <div className="col-lg-4">
              <label htmlFor="type">
                Typ inzerátu
              </label>
              <Field name="type" control="type">
                {({ field, form, meta }) => (
                  <InputWrapper meta={meta}>
                    <Select
                      placeholder={<div className={style['is-placeholder']}>Typ inzerátu</div>}
                      value={values.type}
                      onChange={option => setFieldValue('type', option)}
                      options={typeOptions}
                    />
                  </InputWrapper>
                )}
              </Field>
            </div>
            <div className="col-lg-4">
              <label htmlFor="condition">
                Stav
              </label>
              <Field name="condition" control="condition">
                {({ field, form, meta }) => (
                  <InputWrapper meta={meta}>
                    <Select
                      placeholder={<div className={style['is-placeholder']}>Stav</div>}
                      value={values.condition}
                      onChange={option => setFieldValue('condition', option)}
                      options={conditionOptions}
                    />
                  </InputWrapper>
                )}
              </Field>
            </div>
          </div>
          <div className="container-row center-lg h-mb-1">
            <div className="col-lg-8">
              <div className={style.textAr}>
                <Field name="description" control="description" >
                  {({ field, form, meta }) => (
                    <InputWrapper meta={meta}>
                      <label htmlFor="description">Popis</label>
                      <textarea
                        onChange={field.onChange}
                        value={field.value}
                        name="description"
                        rows={2}
                        placeholder="Popis"
                      ></textarea>
                    </InputWrapper>
                  )}
                </Field>
              </div>
            </div>
          </div>
          <div className="container-row center-lg">
            <div className="col-lg-8 ">
              <label htmlFor="photos">Fotky</label>
              <Field name="photos" control="photos" >
                {({ field, form, meta }) => (
                  <InputWrapper meta={meta}>
                    <input
                      type="file"
                      className={style.file}
                      id="media-upload"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        handleImg(e.target.files[0], setFieldValue, values)
                      }
                      }
                      placeholder="Upload Images"
                    />
                  </InputWrapper>
                )}
              </Field>
              <div className={style['img-container']}>
                {values.photos.map((img, i) => <React.Fragment key={i}><img className={style.photo} src={img.fileToBase64} alt="photo" /></React.Fragment>)}
              </div>
              <Button disabled={!isValid} theme="primary" type="button" className={style.submit}>Next</Button>
            </div>
          </div>
        </Form>
      )
      }
    </Formik >
  )
}
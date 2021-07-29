import React from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import MultiSelect from "react-multi-select-component";
import Select from "react-select";

import { classes } from '../../../services/utils';
import * as tooltips from './tooltips'
import * as routes from '../../../routes'

import style from './Specifications.module.scss';

import { FormText } from '../../FormItems/FormItems';
import { Button } from '../../UI/Button/Button';
import InputWrapper from '../../FormItems/InputWrapper/InputWrapper';
import { brandOptions, colorOptions, cpuCoresOptions, cpuOptions, extraFctionsOptions, gpuBrandOptions, gpuChipOptions, gpuMemoryOptions, gpuTypesOptions, memoryCapacityOptions, memoryOptions, modelOptions, osOptions, ramOptions } from '../../../Options';
import { Tooltip } from '../../UI/Tooltip/Tooltip';

export const Specifications = ({ showSpec, ad, addAd, doneClicked }) => {
  const handleGoBack = (values) => {
    addAd({
      specifications: {
        brand: values.brand,
        model: values.model,
        operating_system: values.operating_system,
        memory_type: values.memory_type,
        memory_capacity: values.memory_capacity,
        ram_capacity: values.ram_capacity,
        cpu: values.cpu,
        cpu_frequency: values.cpu_frequency,
        gpu_brand: values.gpu_brand,
        cpu_cores: values.cpu_cores,
        gpu_type: values.gpu_type,
        gpu_memory: values.gpu_memory,
        gpu_chip: values.gpu_chip,
        diagonal: values.diagonal,
        color: values.color,
      }
    })

    showSpec()
  }
  const onSubmit = async (values, { resetForm, setErrors }) => {
    doneClicked();

    addAd({
      specifications: {
        brand: values.brand,
        model: values.model,
        operating_system: values.operating_system,
        memory_type: values.memory_type,
        memory_capacity: values.memory_capacity,
        ram_capacity: values.ram_capacity,
        cpu: values.cpu,
        cpu_frequency: values.cpu_frequency,
        gpu_brand: values.gpu_brand,
        cpu_cores: values.cpu_cores,
        gpu_type: values.gpu_type,
        gpu_memory: values.gpu_memory,
        gpu_chip: values.gpu_chip,
        diagonal: values.diagonal,
        color: values.color,
      }
    })
  };

  const initialValues = {
    brand: ad && ad.specifications ? ad.specifications.brand : '', // Lenovo, HP, Apple, Acer, Asus, Dell
    model: ad && ad.specifications ? ad.specifications.model : '',
    // Lenovo - IdeaPad, Legion, ThinkPad, ThinkBook, Rada V, Yoga, 
    // HP - EliteBook, Envy, Omen, Pavilion, Pavilion Power, ProBook, Spectre, Z-Book
    // Dell - Alienware, Inspiron, Gaming, Latitude, Precision, Vostro, XPS
    // Acer - Aspire, Extensa, Nitro, Predator, Spin, Swift, TravelMate, ConceptD
    // Asus - ROG, TUF Gaming, StudioBook, VivoBook, ZenBook, ExpertBook
    // Apple - Pro, Air
    operating_system: ad && ad.specifications ? ad.specifications.operating_system : '', // Win 10, Win 8, Win 7, MacOS, ChromeOS, No OS, 
    memory_type: ad && ad.specifications ? ad.specifications.memory_type : '', // SSD, SSD + HDD, HDD
    memory_capacity: ad && ad.specifications ? ad.specifications.memory_capacity : '', // 64GB, 128GB, 256GB, 512GB, 1000GB
    ram_capacity: ad && ad.specifications ? ad.specifications.ram_capacity : '',  // 2GB, 4GB, 8GB, 16GB, 24GB, 32GB, 64GB
    cpu: ad && ad.specifications ? ad.specifications.cpu : '',
    // Intel Core i9, i7, i5, i3, Pentium, Celeron, Xeon, Core M
    // AMD Ryzen 9, 7, 5, 3, Athlon, 
    // Apple Silicon
    cpu_frequency: ad && ad.specifications ? ad.specifications.cpu_frequency : '',  // [GHz] - text
    gpu_brand: ad && ad.specifications ? ad.specifications.gpu_brand : '',
    cpu_cores: ad && ad.specifications ? ad.specifications.cpu_cores : '', // 2, 4, 5, 6, 8
    gpu_type: ad && ad.specifications ? ad.specifications.gpu_type : '', // Integrated, dedicated, game
    gpu_memory: ad && ad.specifications ? ad.specifications.gpu_memory : '', // 2GB, 3GB, 4GB, 6GB, 8GB, 10GB, 12GB, 16GB
    gpu_chip: ad && ad.specifications ? ad.specifications.gpu_chip : '', // NVIDIA GeForce RTX, NVIDIA GeForce GTX, NVIDIA Quadro, NVIDIA GeForce MX, Intel, Apple, AMD
    diagonal: ad && ad.specifications ? ad.specifications.diagonal : '', // 16" - text
    color: ad && ad.specifications ? ad.specifications.color : '', // Silver, black, red, white, blue, gray
  };

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required('Vyplňte značku').transform((opt) => opt.value),
    model: Yup.string().required('Vyplňte model').transform((opt) => opt.value),
    operating_system: Yup.string().required('Vyplňte operační systém').transform((opt) => opt.value),
    memory_type: Yup.string().required('Vyplňte typ paměti').transform((opt) => opt.value),
    memory_capacity: Yup.string().required('Vyplňte velikost paměti').transform((opt) => opt.value),
    ram_capacity: Yup.string().required('Vyplňte velikost operační paměti').transform((opt) => opt.value),
    cpu: Yup.string().required('Vyplňte typ operační paměti').transform((opt) => opt.value),
    cpu_frequency: Yup.number().positive('Taktovací fekvence musí být kladné číslo'),
    cpu_cores: Yup.string().required('Vyplňte počet jader').transform((opt) => opt.value),
    gpu_brand: Yup.string().required('Vyplňte značku grafické karty').transform((opt) => opt.value),
    diagonal: Yup.number().required('Vyplňte úhlopříčku').min(5, 'Vyplňte validní úhlopříčku').max(25, 'Vyplňte validní úhlopříčku'),
  });

  return (
    <div>
      <Formik initialValues={initialValues} enableReinitialize onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur={false}>
        {({ isSubmitting, isValid, errors, touched, values, setFieldValue, setFieldTouched, handleChange }) => (
          <Form>
            <div className="container-row center-lg">
              <h3 className="h-text-center">Specifikace</h3>
              <div className="h-mt-1 h-mb-3 h-px-3 h-text-center">
                <Button className="h-margin-auto" type="button" target="_blank" rel="noreferrer" href={routes.HELP} theme="primary">Potřebuji poradit se specifikacemi</Button>
              </div>
              <h5 className="h-text-center h-mb-1">Obecné</h5>
              <div className="col-lg-4 h-mb-1">
                <Field name="brand" control="brand" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="brand">Značka</label>
                        <Tooltip id="brand" message={tooltips.BRAND} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Značka</div>}
                          value={values.brand}
                          onChange={option => setFieldValue('brand', option)}
                          options={brandOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>

              <div className="col-lg-4">
                <Field name="model" control="model" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="model">Model</label>
                        <Tooltip id="model" message={tooltips.MODEL} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Model</div>}
                          value={values.model}
                          onChange={option => setFieldValue('model', option)}
                          options={modelOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            <div className="container-row center-lg h-mb-1">
              <div className="col-lg-4">
                <FormText type="number" placeholder="Úhlopříčka displeje" name="diagonal" label={
                  <div className="h-display-flex h-mb-05">
                    <label className="h-mr-1" htmlFor="diagonal">Úhlopříčka displeje</label>
                    <Tooltip id="diagonal" message={tooltips.DIAGONAL} />
                  </div>
                } />
              </div>
              <div className="col-lg-4">
                <Field name="color" control="color" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="color">Barva</label>
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Barva</div>}
                          value={values.color}
                          onChange={option => setFieldValue('color', option)}
                          options={colorOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>

            <div className="container-row center-md h-mb-2">
              <div className="col-lg-4">
                <Field name="operating_system" control="operating_system" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="operating_system">Operační systém</label>
                        <Tooltip id="operating_system" message={tooltips.OPERATING_SYSTEM} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Operační systém</div>}
                          value={values.operating_system}
                          onChange={option => setFieldValue('operating_system', option)}
                          options={osOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            {/* End obecne */}

            {/* Pevny disk */}
            <div className="container-row center-md h-mb-2">
              <h5 className="h-text-center h-mb-1">Pevný disk</h5>
              <div className="col-lg-4">
                <Field name="memory_type" control="memory_type" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="memory_type">Typ úložiště</label>
                        <Tooltip id="memory_type" message={tooltips.MEMORY_TYPE} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Pevný disk</div>}
                          value={values.memory_type}
                          onChange={option => setFieldValue('memory_type', option)}
                          options={memoryOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
              <div className="col-lg-4">
                <Field name="memory_capacity" control="memory_capacity" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="memory_capacity">Velikost pevného disku</label>
                        <Tooltip id="memory_capacity" message={tooltips.MEMORY_CAPACITY} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Velikost pevného disku</div>}
                          value={values.memory_capacity}
                          onChange={option => setFieldValue('memory_capacity', option)}
                          options={memoryCapacityOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            {/* End pevny disk */}

            {/* RAM */}
            <div className="container-row center-lg h-mb-2">
              <h5 className="h-text-center h-mb-1">Operační paměť</h5>
              <div className="col-lg-4">
                <Field name="ram_capacity" control="ram_capacity" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="ram_capacity">Velikost operační paměti RAM</label>
                        <Tooltip id="ram_capacity" message={tooltips.RAM_CAPACITY} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Velikost RAM</div>}
                          value={values.ram_capacity}
                          onChange={option => setFieldValue('ram_capacity', option)}
                          options={ramOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            {/* End RAM */}

            {/* Procesor */}
            <div className="container-row center-md h-mb-1">
              <h5 className="h-text-center h-mb-1">Procesor</h5>
              <div className="col-lg-4">
                <Field name="cpu" control="cpu" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="cpu">Typ procesoru</label>
                        <Tooltip id="cpu" message={tooltips.CPU} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Typ procesoru</div>}
                          value={values.cpu}
                          onChange={option => setFieldValue('cpu', option)}
                          options={cpuOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
              <div className="col-lg-4">
                <FormText type="number" placeholder="Frekvence procesoru" name="cpu_frequency" label={
                  <div className="h-display-flex h-mb-05">
                    <label className="h-mr-1" htmlFor="cpu_frequency">Frekvence procesoru</label>
                    <Tooltip id="cpu_frequency" message={tooltips.CPU_FREQUENCY} />
                  </div>
                } />
              </div>
            </div>
            <div className="container-row center-md h-mb-2">
              <div className="col-lg-4">
                <Field name="cpu_cores" control="cpu_cores" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="cpu_cores">Počet jader procesoru</label>
                        <Tooltip id="cpu_cores" message={tooltips.CPU_CORES} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Počet jader procesoru</div>}
                          value={values.cpu_cores}
                          onChange={option => setFieldValue('cpu_cores', option)}
                          options={cpuCoresOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            {/* End procesor */}

            {/* GPU */}
            <div className="container-row center-md h-mb-2">
              <h5 className="h-text-center h-mb-1">Grafická karta</h5>
              <div className="col-lg-4">
                <Field name="gpu_brand" control="gpu_brand" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="gpu_brand">Značka grafické karty</label>
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Značka grafické karty</div>}
                          value={values.gpu_brand}
                          onChange={option => setFieldValue('gpu_brand', option)}
                          options={gpuBrandOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
              <div className="col-lg-4">
                <Field name="gpu_type" control="gpu_type" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="gpu_type">Typ grafické karty</label>
                        <Tooltip id="gpu_type" message={tooltips.GPU_TYPES} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Typ grafické karty</div>}
                          value={values.gpu_type}
                          onChange={option => setFieldValue('gpu_type', option)}
                          options={gpuTypesOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            <div className="container-row center-md h-mb-1">
              <div className="col-lg-4">
                <Field name="gpu_memory" control="gpu_memory" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="gpu_memory">Paměť grafické karty</label>
                        <Tooltip id="gpu_memory" message={tooltips.GPU_MEMORY} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Paměť grafické karty</div>}
                          value={values.gpu_memory}
                          onChange={option => setFieldValue('gpu_memory', option)}
                          options={gpuMemoryOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
              <div className="col-lg-4">
                <Field name="gpu_chip" control="gpu_chip" className={style['edit-select']}>
                  {({ field, form, meta }) => (
                    <React.Fragment>
                      <div className="h-display-flex h-mb-05">
                        <label className="h-mr-1" htmlFor="gpu_chip">Čip grafické karty</label>
                        <Tooltip id="gpu_chip" message={tooltips.GPU_CHIP} />
                      </div>
                      <InputWrapper meta={meta}>
                        <Select
                          placeholder={<div className={style['is-placeholder']}>Čip grafické karty</div>}
                          value={values.gpu_chip}
                          onChange={option => setFieldValue('gpu_chip', option)}
                          options={gpuChipOptions}
                        />
                      </InputWrapper>
                    </React.Fragment>
                  )}
                </Field>
              </div>
            </div>
            {/* End GPU */}
            <div className="container-row center-lg h-mt-2">
              <div className="h-space-between col-lg-8">
                <Button theme="blue-outline" type="button" onClick={() => handleGoBack(values)} className={style.submit}>Zpět</Button>
                <Button theme="primary" type="submit" className={style.submit}>Další</Button>
              </div>
            </div>
          </Form>
        )
        }
      </Formik >
    </div >
  )
}
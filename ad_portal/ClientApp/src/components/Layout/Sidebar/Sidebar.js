import React, { useState } from 'react';
import MultiSelect from "react-multi-select-component";
import { Form, Formik } from 'formik';

import style from './Sidebar.module.scss';
import { Range } from '../../UI/Range/Range';
import { Button } from '../../UI/Button/Button';
import { brandOptions, colorOptions, cpuCoresOptions, cpuOptions, extraFctionsOptions, gpuBrandOptions, gpuChipOptions, gpuMemoryOptions, gpuTypesOptions, memoryCapacityOptions, memoryOptions, modelOptions, osOptions, ramOptions } from '../../../Options';
import { FormText } from '../../FormItems/FormItems';
import { classes } from '../../../services/utils';

export const Sidebar = ({handleFilter, handlePrice, setLowestPrice, setHighestPrice}) => {
  const [lowest,setLowest] = useState(false);
  const [highest, setHighest] = useState(false);

  const initialValues = {
    brand: [],
    model: [],
    operating_system: [],
    memory_type: [],
    memory_capacity: [],
    ram_capacity: [],
    cpu: [],
    cpu_frequency: { from: '', to: '' },
    gpu_brand: [],
    cpu_cores: [],
    gpu_type: [],
    gpu_memory: [],
    gpu_chip: [],
    diagonal: { from: '', to: '' },
    color: [],
  };

  const onSubmit = async (values) => {
    handleFilter(values)
  };

  const handleLowest = () => {
    setLowest(!lowest);
    setHighest(false)
    setLowestPrice();
  }

  const handleHighest = () => {
    setHighest(!highest);
    setLowest(false)
    setHighestPrice();
  }

  return (
    <div className={style.sidebar}>
      <div className="h-text-18 h-color-primary">Řazení</div>
      <div className="h-space-between h-mb-1">
        <Button onClick={() => handleLowest()} className={classes("h-mt-05", {[style.clicked]: lowest})}>Nejlevnější</Button>
        <Button onClick={() => handleHighest()} className={classes("h-display-block h-mt-05",  {[style.clicked]: highest})}>Nejdražší</Button>
      </div>
      <Range handlePrice={handlePrice} label="Cena" />
      <div className="h-mt-1 h-text-18 h-mb-1 h-color-primary">Filtrace</div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnBlur={false}>
        {({ values, setFieldValue }) => (
          <Form>
            <div>Značka</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Značka</div>}
              value={values.brand}
              onChange={option => setFieldValue('brand', option)}
              options={brandOptions}
            />
            <div className="h-mt-1">Model</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Model</div>}
              value={values.model}
              onChange={option => setFieldValue('model', option)}
              options={modelOptions}
            />
            <div className="h-display-flex h-mt-1">
              <FormText type="number" placeholder="Od" name="diagonal.from" label="Úhlopříčka" className="h-mr-05" />
              <FormText type="number" placeholder="Do" name="diagonal.to" />
            </div>
            <div className="h-mt-1">Barva</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Barva</div>}
              value={values.color}
              onChange={option => setFieldValue('color', option)}
              options={colorOptions}
            />
            <div className="h-mt-1">Operační systém</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Operační systém</div>}
              value={values.operating_system}
              onChange={option => setFieldValue('operating_system', option)}
              options={osOptions}
            />
            <div className="h-mt-1">Operační paměť RAM velikost</div>
            <MultiSelect
              options={ramOptions}
              value={values.ram_capacity}
              onChange={(e) => setFieldValue('ram_capacity', e)}
              labelledBy="Select"
            />
            <div className="h-mt-1">Typ úložiště</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Pevný disk</div>}
              value={values.memory_type}
              onChange={option => setFieldValue('memory_type', option)}
              options={memoryOptions}
            />
            <div className="h-mt-1">Velikost pevného disku</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Velikost pevného disku</div>}
              value={values.memory_capacity}
              onChange={option => setFieldValue('memory_capacity', option)}
              options={memoryCapacityOptions}
            />
            <div className="h-mt-1">Typ procesoru</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Typ procesoru</div>}
              value={values.cpu}
              onChange={option => setFieldValue('cpu', option)}
              options={cpuOptions}
            />
            <div className="h-display-flex h-mt-1">
              <FormText type="number" placeholder="Od" name="cpu_frequency.from" label="Frekvence CPU" className="h-mr-05" />
              <FormText type="number" placeholder="Do" name="cpu_frequency.to" />
            </div>
            <div className="h-mt-1">Počet jader procesoru</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Počet jader procesoru</div>}
              value={values.cpu_cores}
              onChange={option => setFieldValue('cpu_cores', option)}
              options={cpuCoresOptions}
            />
            <div className="h-mt-1">Značka grafické karty</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Značka grafické karty</div>}
              value={values.gpu_brand}
              onChange={option => setFieldValue('gpu_brand', option)}
              options={gpuBrandOptions}
            />
            <div className="h-mt-1">Typ grafické karty</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Typ grafické karty</div>}
              value={values.gpu_type}
              onChange={option => setFieldValue('gpu_type', option)}
              options={gpuTypesOptions}
            />
            <div className="h-mt-1">Paměť grafické karty</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Paměť grafické karty</div>}
              value={values.gpu_memory}
              onChange={option => setFieldValue('gpu_memory', option)}
              options={gpuMemoryOptions}
            />
            <div className="h-mt-1">Čip grafické karty</div>
            <MultiSelect
              placeholder={<div className={style['is-placeholder']}>Čip grafické karty</div>}
              value={values.gpu_chip}
              onChange={option => setFieldValue('gpu_chip', option)}
              options={gpuChipOptions}
            />
            <Button theme="primary" className="h-mt-1 h-width-100">Filtruj</Button>
          </Form>
        )}
      </Formik >
    </div>
  )
}
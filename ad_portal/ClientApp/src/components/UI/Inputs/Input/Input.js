import React from 'react';
import { classes } from '../../../../services/utils';
import style from './Input.module.scss';

export const Input = (props) => {
  const { label, name, value, onChange, onBlur, type = 'text', disabled = false, className, placeholder } = props;

  return (
    <div className={classes(style.wrapper, { [className || '']: !!className })}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={style.input}
      />
    </div>
  )
}
import React from 'react';
import { classes } from '../../../services/utils';

import style from './InputWrapper.module.scss';


const InputWrapper = (props) => {
  const { className, meta, note } = props;
  const error = !!meta.touched && !!meta.error;

  return (
    <div
      className={classes([style.wrapper, className], {
        [style['is-invalid']]: error,
      })}
    >
      {props.children}
      {((error && !props.hideError) || note) && (
        <div className={error && !props.hideError ? style.error : style.note}>
          <span>{error && !props.hideError ? meta.error : note}</span>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;

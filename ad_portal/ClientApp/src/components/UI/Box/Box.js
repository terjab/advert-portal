import React from 'react';
import { useHistory } from 'react-router-dom';
import { classes } from '../../../services/utils';
import style from './Box.module.scss';

export const Box = ({ children, disabled, icon }) => {
  const history = useHistory();

  return (
    <button onClick={() => history.push(`notebooky`)} className={classes(style.box, { [style.disabled]: disabled })}>
      <div className={style.text}>{children}</div>
      <div className={style.icon}>{icon}</div>
    </button>
  )
}
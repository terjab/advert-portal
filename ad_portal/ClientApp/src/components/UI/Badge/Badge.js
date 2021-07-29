import React from 'react';
import { classes } from '../../../services/utils';
import style from './Badge.module.scss';
import { CloseIcon } from '../Icons/Icons'
import { Button } from '../Button/Button';

export const Badge = ({ children, className, onClick }) => {

  return (
    <div className={classes(style.badge, { [className]: !!className })} >
      <Button onClick={() => console.log('todo')} >
        <CloseIcon />
      </Button>
      {children}
    </div>
  )
}
import React from 'react';
import { classes } from '../../../services/utils';
import style from './Button.module.scss';

export const Button = ({ theme, children, className, onClick, href, target, rel }) => {
  // theme - primray, blue-outline
  return (
    <React.Fragment>
      {href ? <a target={target} rel={rel} className={classes(style.button, { [style[`is-${theme}`]]: !!theme, [className]: !!className })} href={href}>{children}</a> :
        <button onClick={onClick} className={classes(style.button, { [style[`is-${theme}`]]: !!theme, [className]: !!className })}>{children}</button>
      }
    </React.Fragment>
  )
}
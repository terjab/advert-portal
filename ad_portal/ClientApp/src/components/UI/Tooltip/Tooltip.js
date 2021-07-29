import React from 'react'
import ReactTooltip from 'react-tooltip';
import { QuestionIcon } from '../Icons/Icons';
import style from './Tooltip.module.scss';

export const Tooltip = ({ message, id }) => {
  return (
    <div className={style.tooltip}>
      <a data-tip data-for={`tooltip:${id}`}>
        <QuestionIcon />
      </a>
      <ReactTooltip id={`tooltip:${id}`}>
        <span>{message}</span>
      </ReactTooltip>
    </div>
  )
}
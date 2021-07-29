import React from 'react'
import { useHistory } from 'react-router-dom';

import { classes } from '../../../services/utils';
import * as routes from '../../../routes'

import style from './Topbar.module.scss';

import { Search } from '../../Search/Search';
import { UserIcon, HeartIcon, HomeIcon, PlusIcon } from '../../UI/Icons/Icons';

export const Topbar = ({ handleSearch }) => {
    const history = useHistory();

  return (
    <nav className={style.topbar}>
      <div className="h-display-flex h-width-100 h-space-between">
        <button onClick={() => history.push(routes.NEW_ADD)} className={style['add-button']}>
          <PlusIcon className="h-mr-1" />
          {/* <img src='/icons/plus.png' width="18" height="18" alt="plus"  /> */}
          Přidat inzerát
        </button>
        <div className={classes([[style.search]])}>
            <Search handleSearch={handleSearch} />
        </div>
        <div className="h-display-flex">
          <button className={style.btn}>
            <UserIcon />
          </button>
          <button className={style['btn-stroke']}>
            <HeartIcon />
          </button>
          <button onClick={() => history.push(routes.HOMEPAGE)} className={style.btn}>
            <HomeIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}


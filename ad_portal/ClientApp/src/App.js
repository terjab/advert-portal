import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as routes from './routes'

import { Homepage } from './pages/homepage'
import { Detail } from './pages/detail'
import { Category } from './pages/category';
import { Add } from './pages/add';
import { Help } from './pages/help';


const App = () => {
  return (
    <Switch>
      <Route exact path={routes.HELP} component={Help} />
      <Route exact path={routes.DETAIL} component={Detail} />
      <Route exact path={routes.NEW_ADD} component={Add} />
      <Route exact path={routes.CATEGORY} component={Category} />
      <Route exact path={routes.HOMEPAGE} component={Homepage} />
    </Switch>
  );
}

export default App

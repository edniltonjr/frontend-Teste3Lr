import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GENERALDASHBOARD from '../pages/Dashboard/GENERAL';
import FuncionariosList from '../pages/Funcionarios';
import Cargos from '../pages/Cargos';

import Route from './Routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/funcionarios" component={FuncionariosList} />
        <Route path="/cargos" exact component={Cargos} />
        <Route path="/" exact component={GENERALDASHBOARD} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

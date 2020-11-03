import React from 'react';
import Main from '../Main';

import ClockIcon from '../../assets/icons/015-clock.svg';

// import { Container } from './styles';

const Monitor: React.FC = () => {
  return (
    <>
      <ul>
        {/* <TI_ModulesList /> */}
        <Main
          title="Funcionários"
          departament="Módulo padrão"
          description="Cadastro/Visualização de Funcionários"
          route="/funcionarios"
          img={ClockIcon}
        />
      </ul>

      <ul>
        {/* <TI_ModulesList /> */}
        <Main
          title="Cargos"
          departament="Módulo padrão"
          description="Cadastro/Visualização de Cargos"
          route="/cargos"
          img={ClockIcon}
        />
      </ul>
    </>
  );
};
export default Monitor;

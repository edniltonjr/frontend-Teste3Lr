import { combineReducers } from 'redux';

import funcionarios from './funcionarios';
import cargos from './cargos';

export default combineReducers({
  funcionarios,
  cargos,
});

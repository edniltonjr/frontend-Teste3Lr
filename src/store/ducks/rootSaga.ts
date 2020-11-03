import { all, takeLatest } from 'redux-saga/effects';

import { FuncionariosTypes } from './funcionarios/types';
import { CargosTypes } from './cargos/types';

import { load } from './funcionarios/sagas';
import { loadCargos, criarCargo } from './cargos/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(FuncionariosTypes.LOAD_REQUEST, load),
    takeLatest(CargosTypes.LOAD_REQUEST, loadCargos),
    takeLatest(CargosTypes.CREATE_CARGO, criarCargo),
  ]);
}

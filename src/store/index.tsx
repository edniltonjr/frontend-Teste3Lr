import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import multi from 'redux-multi';
import { FuncionariosState } from './ducks/funcionarios/types';

import { CargosState } from './ducks/cargos/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  funcionarios: FuncionariosState;
  cargos: CargosState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(multi, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;

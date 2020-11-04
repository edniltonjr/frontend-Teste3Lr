import { apply, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadRequest } from '../funcionarios/actions';

import {
  loadSuccess,
  loadFailure,
  createCargo,
  createFailure,
  createSuccess,
} from './actions';

export function* loadCargos() {
  try {
    const response = yield call(api.get, 'cargos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure(err));
  }
}

export function* criarCargo({ payload }: any) {
  try {
    const response = yield apply(api, api.post, ['cargos', payload.descricao]);
    console.log(response, 'RESPONSE CRIAR CARGO');
    yield put<any>(createSuccess([response.data]));
    loadRequest();
    alert(response.data.message);
  } catch (err) {
    console.log('ERRO MSG', err);
    yield put(loadFailure(err));
  }
}

import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadSuccess,
  loadFailure,
  createCargo,
  createFailure,
} from './actions';

export function* loadCargos() {
  try {
    const response = yield call(api.get, 'cargos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* criarCargo({ payload }: any) {
  try {
    const response = yield call(api.post, 'cargos', payload.descricao);

    yield put(createCargo(response.data));
  } catch (err) {
    yield put(createFailure(err));
  }
}

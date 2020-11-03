import { action } from 'typesafe-actions';
import { Cargo, CargosTypes } from './types';

export const loadRequest = () => action(CargosTypes.LOAD_REQUEST);

export const loadSuccess = (data: Cargo[]) =>
  action(CargosTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(CargosTypes.LOAD_FAILURE);

export const createFailure = (error: ErrorEvent) =>
  action(CargosTypes.CREATE_FAILURE, { error });

export const createCargo = (descricao: string) =>
  action(CargosTypes.CREATE_CARGO, { descricao });

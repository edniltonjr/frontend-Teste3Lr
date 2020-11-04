import { action } from 'typesafe-actions';
import { Cargo, CargosTypes } from './types';

export const loadRequest = () => action(CargosTypes.LOAD_REQUEST, {});

export const loadSuccess = (data: Cargo[]) =>
  action(CargosTypes.LOAD_SUCCCES, { data });

export const loadFailure = (error: ErrorEvent) =>
  action(CargosTypes.LOAD_FAILURE, { error });

export const createFailure = (error: ErrorEvent) =>
  action(CargosTypes.CREATE_FAILURE, { error });

export const createCargo = (descricao: string) =>
  action(CargosTypes.CREATE_REQUEST, { descricao });

export const createSuccess = (data: any) => [
  action(CargosTypes.CREATE_SUCCESS, { data }),
  loadRequest(),
];

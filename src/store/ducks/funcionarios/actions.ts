import { action } from 'typesafe-actions';
import { Funcionario, FuncionariosTypes } from './types';

export const loadRequest = () => action(FuncionariosTypes.LOAD_REQUEST);

export const loadSuccess = (data: Funcionario[]) =>
  action(FuncionariosTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(FuncionariosTypes.LOAD_FAILURE);

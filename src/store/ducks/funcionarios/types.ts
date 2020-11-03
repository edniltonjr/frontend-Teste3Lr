/* eslint-disable camelcase */
/**
 * Action types
 */
export enum FuncionariosTypes {
  LOAD_REQUEST = '@funcionarios/LOAD_REQUEST',
  LOAD_SUCCCES = '@funcionarios/LOAD_SUCCCES',
  LOAD_FAILURE = '@funcionarios/LOAD_FAILURE',
  CREATE_FUNCIONARIO = '@funcionarios/CREATE',
}

/**
 * Data types
 */
export interface Funcionario {
  id: number;
  nome: string;
  sobrenome: string;
  cargo: number;
  nascimento: Date;
  salario: string;
}

/**
 * State type
 */
export interface FuncionariosState {
  readonly data: Funcionario[];
  readonly loading: boolean;
  readonly error: boolean;
}

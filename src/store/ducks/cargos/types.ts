/* eslint-disable camelcase */
/**
 * Action types
 */
export enum CargosTypes {
  LOAD_REQUEST = '@cargos/LOAD_REQUEST',
  LOAD_SUCCCES = '@cargos/LOAD_SUCCCES',
  LOAD_FAILURE = '@cargos/LOAD_FAILURE',
  CREATE_REQUEST = '@cargos/CREATE_REQUEST',
  CREATE_SUCCESS = '@cargos/CREATE_SUCCESS',
  CREATE_FAILURE = '@cargos/CREATE_FAILURE',
}

/**
 * Data types
 */
export interface Cargo {
  id: number;
  cargo: string;
}

/**
 * State type
 */
export interface CargosState {
  readonly data: Cargo[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly success: boolean;
}

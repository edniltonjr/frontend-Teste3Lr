import { Reducer } from 'redux';
import { FuncionariosState, FuncionariosTypes } from './types';

const INITIAL_STATE: FuncionariosState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<FuncionariosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FuncionariosTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case FuncionariosTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case FuncionariosTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

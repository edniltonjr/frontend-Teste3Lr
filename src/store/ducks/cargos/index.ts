import { Reducer } from 'redux';
import { CargosState, CargosTypes } from './types';

const INITIAL_STATE: CargosState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CargosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CargosTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CargosTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CargosTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    case CargosTypes.CREATE_CARGO:
      return {
        ...state,
        loading: true,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;

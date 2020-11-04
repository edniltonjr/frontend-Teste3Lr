import { Reducer } from 'redux';
import { CargosState, CargosTypes } from './types';

const INITIAL_STATE: CargosState = {
  data: [],
  error: false,
  loading: false,
  success: false,
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
        success: true,
        data: action.payload.data,
      };
    case CargosTypes.LOAD_FAILURE:
      const { error } = action.payload;
      console.log(error, 'LOAD FAILURE');
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload.error,
      };
    case CargosTypes.CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CargosTypes.CREATE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload.data,
      };

    case CargosTypes.CREATE_FAILURE:
      console.log(action.payload.error, 'ERROR');
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;

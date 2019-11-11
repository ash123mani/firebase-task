import { IS_LOADING, IS_ERROR } from "../actions/types";

const initialState = {
  isLoading: false,
  error: {
    isError: false
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: {
          ...state.error,
          isError: false
        }
      };
    case IS_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          isError: action.payload,
          errorText: action.payload ? "Error occured" : null
        }
      };
    default:
      return state;
  }
};

export default appReducer;

import { IS_LOADING, IS_ERROR } from "./types";

export const setLoading = flag => {
  return {
    type: IS_LOADING,
    payload: flag
  };
};

export const setError = flag => {
  return {
    type: IS_ERROR,
    payload: flag
  };
};

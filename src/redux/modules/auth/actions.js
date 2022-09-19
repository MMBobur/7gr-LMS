import types from '../../../constants/action-types';

export const setToken = (payload) => ({ type: types.SET_TOKEN, payload });
export const logout = () => ({ type: types.CLEAR_TOKEN });
// export const setError = (payload) => ({ type: types.AUTH_ERROR, payload });

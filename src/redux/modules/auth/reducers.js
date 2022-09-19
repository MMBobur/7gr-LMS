import types from '../../../constants/action-types.js';

const defaultState = {
  token: localStorage.getItem('jwt_token'),
  error: '',
};

const map = {
  [types.CLEAR_TOKEN]: (state) => {
    localStorage.removeItem('jwt_token');
    return { ...state, token: '' };
  },
  // [types.AUTH_ERROR]: (state, { payload }) => ({ ...state, error: payload }),
  [types.SET_TOKEN]: (state, { payload }) => {
    localStorage.setItem('jwt_token', payload);
    return { ...state, token: payload };
  },
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;

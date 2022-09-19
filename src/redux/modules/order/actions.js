import types from "../../../constants/action-types";

export const setOrder = (payload) => ({ type: types.SET_ORDER, payload });
export const setOrderId = (payload) => ({ type: types.SET_ORDERID, payload });
export const setPlace = (payload) => ({ type: types.SET_PLACE, payload });
export const setPlaceName = (payload) => ({
  type: types.SET_PLACENAME,
  payload,
});
export const removeOrder = (payload) => ({ type: types.REMOVE_ORDER, payload });

export const clearOrder = () => ({ type: types.CLEAR_ORDER });

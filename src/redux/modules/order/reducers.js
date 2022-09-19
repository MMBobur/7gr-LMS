import types from "../../../constants/action-types.js";

const defaultState = {
  place: 0,
  products: [],
  orderId: "",
  placeName: "",
};

const map = {
  [types.CLEAR_ORDER]: (state) => {
    return { ...state, place: 0, products: [], orderId: "", placeName: "" };
  },
  [types.SET_ORDERID]: (state, { payload }) => {
    return { ...state, orderId: payload };
  },

  [types.SET_PLACENAME]: (state, { payload }) => {
    return { ...state, placeName: payload };
  },

  [types.SET_ORDER]: (state, { payload }) => {
    const indexData = state.products.findIndex(
      (state) => state.product.id === payload.product.id
    );
    if (0 > indexData) {
      const data = state.products;
      data.push(payload);
      return { ...state, products: data };
    } else {
      const newData =
        Number(state.products[indexData].amount) + Number(payload.amount);
      state.products[indexData].amount = newData;

      return state;
    }
  },
  [types.REMOVE_ORDER]: (state, { payload }) => {
    const del = state.products.filter((item) => item.product.id !== payload);
    return { ...state, products: del };
  },
  [types.SET_PLACE]: (state, { payload }) => {
    return { ...state, place: payload };
  },
};

export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;

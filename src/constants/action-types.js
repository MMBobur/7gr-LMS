import auth from './actions/auth';
import order from "./actions/order"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...auth,
  ...order
};

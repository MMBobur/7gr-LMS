import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../modules";

const middlewares = [thunk];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const configureStore = (initialState) =>
  createStoreWithMiddlewares(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore();

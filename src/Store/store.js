import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
  }
  return applyMiddleware(...middleware);
};

 export const store = createStore(rootReducer,{}, bindMiddleware([thunk]));


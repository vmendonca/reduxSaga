import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const middleware = [];
const enhancers = [];

  /* Saga */
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

  const store = createAppropriateStore(
    reducers,
    compose(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

export default  store;

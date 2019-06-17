import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from './sagas';

// const reduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

// let store = createStore(
//     reducers,
//     compose(applyMiddleware(sagaMiddleware), reduxDevTools)
// );

// sagaMiddleware.run(rootSaga);


// production
/*
const bindMiddleware = middleware => {
    const arrMiddleware = [middleware];
  
    if (process.env.NODE_ENV !== "production") {
      const { composeWithDevTools } = require("redux-devtools-extension");
      // arrMiddleware.push(createLogger());
      return composeWithDevTools(applyMiddleware(...arrMiddleware));
    }
    return applyMiddleware(...arrMiddleware);
  };
  
  function configureStore() {
    const store = createStore(reducers, bindMiddleware(sagaMiddleware));
  
    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleware.run(sagas);
    };
  
    store.runSagaTask();
  
    return store;
  }
  */
// end production

const initializeStore = initialState => {
    const store = createStore(
      reducers,
      initialState,
      applyMiddleware(sagaMiddleware)
    );
  
    sagaMiddleware.run(rootSaga);
  
    return store;
  };

export default initializeStore;
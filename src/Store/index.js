import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import loginWatcherSaga from "../Sagas/index";

import rootReducer from "../Reducers/index";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
console.log(store.getState());

sagaMiddleware.run(loginWatcherSaga);
export default store;
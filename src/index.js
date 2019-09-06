import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Gallery from "./components/Gallery";
import reducer from "./reducers";

import { watchLoadImages } from "./sagas";

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
);

ReactDOM.render(<Provider store={store}>
    <Gallery />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

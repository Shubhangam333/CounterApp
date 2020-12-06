// Provider, connect - react-redux

import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Modal from './Modal';

import countReducer from './countReducer';
import modalReducer from './modalReducer';

const middleware = [thunk];
// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
// store.dispatch(getProducts());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
    </Provider>
  );
};

export default App;

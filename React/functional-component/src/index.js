import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
//for core-redux thunk (async calls)
// import store from './Redux Thunk/Store/store';

//for core-redux counter
// import {createStore} from 'redux'
// import reducer from './Counter using Core Redux/Reducer';
// const store=createStore(reducer)

// for reduxjs toolkit
import store from './Redux Toolkit/store'
import { fetchUser } from './Redux Toolkit/useSlice'
store.dispatch(fetchUser())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // For Core-Redux
  <Provider store={store}>
    <App></App>
  </Provider>


  // Context API
  // <App></App>
);

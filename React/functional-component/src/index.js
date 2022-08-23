import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

// for reduxjs toolkit
// import store from './Redux Toolkit/store'

// for store application
// import store from './StoreApp/store'

// for express react app
import store from './ReactExpressApp/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // For Core-Redux
  <Provider store={store}>
    <App></App>
  </Provider>

  // Context API
  // <App></App>

  // Ref demo
  // <App></App>

  //Joi Browser
  // <App></App>
);

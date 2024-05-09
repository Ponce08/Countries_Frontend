import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ridux/store.js';
import App from './App.jsx';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://countriesback-production-2944.up.railway.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ridux/store.js';
import App from './App.jsx';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = 'https://countries-back-d9kj.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

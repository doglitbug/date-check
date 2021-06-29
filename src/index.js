import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Database from './components/Database';

import 'bootstrap/dist/css/bootstrap.min.css';

//Start up database
Database();

//Start application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
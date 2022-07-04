import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { init } from '@kiltprotocol/sdk-js';

import { W3NId } from './Components/W3NId';
import reportWebVitals from './reportWebVitals';

init({ address: process.env.REACT_APP_CHAIN_ENDPOINT });

ReactDOM.render(
  <React.StrictMode>
    <W3NId />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

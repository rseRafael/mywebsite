import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import WebSite from './myScript.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WebSite />, document.getElementById('root'));
registerServiceWorker();

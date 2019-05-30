import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import './components/navbar/node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>  
        <App />
    </Router>
    , document.getElementById('root'))

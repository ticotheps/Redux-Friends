import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';



const store = createStore(reducer);


ReactDOM.render(<App />, document.getElementById('root'));


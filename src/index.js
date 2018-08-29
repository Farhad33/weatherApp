import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router';
import configureStore from './store';
import './index.sass';


let store = configureStore();
const root = document.getElementById('root');
ReactDOM.render(<Router store={store} />, root);

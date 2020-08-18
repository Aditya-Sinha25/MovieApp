import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers';


import './index.css';
import App from './Components/App';
import movies from './reducers';


const store=createStore(movies);
ReactDOM.render(<App store={store}/>,document.getElementById('root'));
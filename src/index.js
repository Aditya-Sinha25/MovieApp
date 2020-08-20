import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';


import './index.css';
import App from './Components/App';
import movies from './reducers';

//const thunk =({dispatch,getState}) => (next) =>(action) => {
//    if(typeof action  ==='function'){
//        action(dispatch);
//        return;
//    }
//    next(action);
//}

const logger= ({dispatch,getState}) => (next) => (action) => {
            //middleware code
            if(typeof action !=='function'){
                console.log('ACTION_TYPE=', action.type);
            }
            
            next(action);
}

const store=createStore(movies);
ReactDOM.render(<App store={store}/>,document.getElementById('root'));
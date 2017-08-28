import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import App from './components/App';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const store = createStore(rootReducer,
  applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
)

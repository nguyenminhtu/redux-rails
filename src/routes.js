import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import TodoList from './components/TodoList';
import TodoShow from './components/TodoShow';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={TodoList} />
    <Route path='/todos/:id' component={TodoShow} />
  </Route>
)

export default routes;

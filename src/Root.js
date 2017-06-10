import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import AppTodoList from './containers/AppTodoList';
import AppHome from './containers/AppHome';
import GameApp from './containers/AppGame'
import Layout from './containers/AppLayout'


const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout} children={AppHome}/>    
    <Route path='nice-tdl' component={Layout}>
      <IndexRoute component={AppHome}/>
      <Route path="home" component={AppHome} />
      <Route path="list" component={AppTodoList} />
      <Route path="game" component={GameApp} />
    </Route>
  </Router>
);


export default Root;
import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import AppTodoList from '../containers/app-todo-list' ;
import AppHome from '../containers/app-home';
import GameApp from '../containers/app-game'


const Root = () => (
    <Router history={browserHistory}>
      <Route path="/nice-tdl/home" component={AppHome} />
      <Route path="/nice-tdl/list" component={AppTodoList} />
      <Route path="/nice-tdl/game" component={GameApp} />
    </Router>
);


export default Root;
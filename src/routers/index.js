import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import AppTodoList from '../containers/app-todo-list' ;
import AppHome from '../containers/app-home';
import GameApp from '../containers/app-game'


const Root = () => (
    <Router history={browserHistory}>
      <Route path="/home" component={AppHome} />
      <Route path="/list" component={AppTodoList} />
      <Route path="/game" component={GameApp} />
    </Router>
);


export default Root;
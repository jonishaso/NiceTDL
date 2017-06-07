import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import AppTodoList from '../containers/AppTodoList' ;
import AppHome from '../containers/AppHome';
import GameApp from '../containers/AppGame'


const Root = () => (
    <Router history={browserHistory}>
      <Route path="/home" component={AppHome} />
      <Route path="/list" component={AppTodoList} />
      <Route path="/game" component={GameApp} />
    </Router>
);


export default Root;
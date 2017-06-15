import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppTodoList from './containers/AppTodoList';
import AppHome from './containers/AppHome';
import GameApp from './containers/AppGame';
import Header from './components/header';
import Footer from './components/footer'


const Root = () => (
  <BrowserRouter>
    <div>
      <Route component={Header}/>
      <Switch>
          <Route path="/nice-tdl/home" component={AppHome} />
          <Route path="/nice-tdl/list" component={AppTodoList} />
          <Route path="/nice-tdl/game" component={GameApp} />
      </Switch>
      <Route component={Footer}/>
    </div>
  </BrowserRouter>
);

export default Root;
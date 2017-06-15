import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';
import logo from '../logo.svg';

class Layout extends Component {
  render() {
    return (
      <div className="container-fluid mx-0 px-0">
        <div className="App-header row justify-content-center">
          <img src={logo} className="App-logo my-1" alt="logo" />
        </div>
        <nav className="navbar navbar-toggleable-sm row justify-content-center navbar-inverse bg-inverse p-0">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link h3" to="/nice-tdl/home">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link h3" to="/nice-tdl/list">Todo</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link h3" to="/nice-tdl/game">Game</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Layout;
import React from 'react';

var NavList = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/list">Todo List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/game">Game</a>
      </li>
    </ul>
    </nav>)
}

export default NavList;
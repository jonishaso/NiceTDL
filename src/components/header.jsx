import React from 'react';
import '../style/header.css';
import logo from '../logo.svg';


const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Todo List</h2>
    </div>
  )
}

export default Header
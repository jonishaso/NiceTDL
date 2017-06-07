import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import NavList from '../components/navList'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavList/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
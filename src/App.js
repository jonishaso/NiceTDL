import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/config-store'
import Root from './routers/index';
import Layout from './containers/app-layout'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Provider store={store}>
          <Root />
        </Provider>
      </Layout>
    )
  }
}
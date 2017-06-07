import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/config-store'
import Root from './routers/index';
import Layout from './containers/app-layout'
import registerServiceWorker from './registerServiceWorker';

render(
    <Layout>
        <Provider store={store}>
            <Root />
        </Provider>
    </Layout>,
    document.getElementById('root'));
registerServiceWorker();

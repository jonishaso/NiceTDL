import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configStore'
import Root from './Root';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

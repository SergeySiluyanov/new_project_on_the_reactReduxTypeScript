import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/style.less';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Reducers from './reducers';
import MainMiddleWare from './middlewares/mainMiddleWare';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(
    MainMiddleWare
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers) }>
        <BrowserRouter basename='/'>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


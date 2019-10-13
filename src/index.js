import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import './semantic/dist/semantic.min.css';
import rootReducer from './services/reducers';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from './components/layouts';

const store = createStore(rootReducer);
window.APP_STATE = store;

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

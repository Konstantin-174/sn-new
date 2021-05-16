import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import {store} from './state/redux_store';
import App from './App';
import {Provider} from 'react-redux';

export const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    rerenderTree()
});
rerenderTree();

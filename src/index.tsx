import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import {store} from './state/redux_store';
import App from './App';

export const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    rerenderTree()
});
rerenderTree();

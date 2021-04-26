import ReactDOM from 'react-dom';
import React from 'react';
import App from '../App';
import {addPost, changeNewText, RootStateType} from './state';

export const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
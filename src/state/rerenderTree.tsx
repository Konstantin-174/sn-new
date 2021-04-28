import ReactDOM from 'react-dom';
import React from 'react';
import App from '../App';
import {addMessage, addPost, changeNewMessage, changeNewText, RootStateType} from './state';

export const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 changeNewMessage={changeNewMessage}
                 addPost={addPost}
                 changeNewText={changeNewText}
                 addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
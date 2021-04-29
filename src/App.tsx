import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {StoreType} from './state/store';

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <section className="Content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile profilePage={state.profilePage}
                                                                      addPost={props.store.addPost.bind(props.store)}
                                                                      changeNewText={props.store.changeNewText.bind(props.store)}/>}/>
                        <Route path="/messages" render={() => <Messages newMessage={state.dialogsPage.newMessageText}
                                                                        changeNewMessage={props.store.changeNewMessage.bind(props.store)}
                                                                        messages={state.dialogsPage.messages}
                                                                        dialogs={state.dialogsPage.dialogs}
                                                                        addMessage={props.store.addMessage.bind(props.store)}/>}/>
                        <Redirect to="/profile"/>
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;

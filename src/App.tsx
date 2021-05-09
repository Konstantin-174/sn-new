import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {RootStoreType} from './state/redux_store';
import MessagesContainer from './components/Messages/MessagesContainer';

type AppPropsType = {
    store: RootStoreType
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
                        <Route path="/profile" render={() => <Profile profilePage={state.profileReducer}
                                                                      dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/messages" render={() => <MessagesContainer dialogs={state.dialogsReducer}
                                                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Redirect to="/profile"/>
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;

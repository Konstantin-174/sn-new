import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {addPost, RootStateType} from './state/state';

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <section className="Content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile posts={props.state.posts}
                                                                      addPost={addPost}/>}/>
                        <Route path="/messages" render={() => <Messages dialogs={props.state.dialogs}/>}/>
                        <Redirect to="/profile"/>
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;

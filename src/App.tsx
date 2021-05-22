import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {MessagesContainer} from './components/Messages/MessagesContainer';
import {UsersContainer} from './components/Users/UsersContainer';


function App() {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <section className="Content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route path="/friends" render={() => <UsersContainer/>}/>
                        <Redirect to="/profile"/>
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;

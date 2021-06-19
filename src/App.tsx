import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {MessagesContainer} from './components/Messages/MessagesContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';


function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <section className="Content">
                    <Switch>
                        <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
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

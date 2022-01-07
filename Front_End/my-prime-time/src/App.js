import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Header from './components/Header';
import Movie from './components/Movie';
import {Watchlist} from './components/Watchlist';
import Add from "./components/Add";
import Watched from "./components/Watched";
import { GlobalProvider } from './context/GlobalState';
import './lib/font-awesome/css/all.min.css';
import "./App.css";
import UserApi from "./UserApi";






const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const getLoggedInUser = async () => {
        if (localStorage.getItem('user-token') !== 'null'){
            let response = await UserApi.getUserLogin(localStorage.getItem('user-token'))
            let data = await response.json();
            setLoggedIn(true);
            setUser(data)
           
        }
    }

    useEffect(() => {
        getLoggedInUser()
           
        }, [])

    const handleLogout = () => {
        localStorage.setItem("user-token", null);
        setLoggedIn(false);
        setUser(null)
        
    }

    const handleLogin = async (evt) => {
        evt.preventDefault();
        console.log(evt.target.username.value)
        console.log(evt.target.password.value)
        let userCredentials = {
            username: evt.target.username.value,
            password: evt.target.password.value
        }
        let response = await UserApi.LoginUser(userCredentials)
        setLoggedIn(true)
        let data = await response.json()
        setUser(data.user)
        console.log(data.token)
        localStorage.setItem("user-token", data.token)
    }


    const renderLogin = () => {
        return(
            <Login 
                handleLogin={handleLogin}
                isLoggedIn={isLoggedIn}
                user={user}
            />
        )
    }
   
    const renderHome = () => {
        return(
            <Home 
                isLoggedIn={isLoggedIn}
                user={user}
            />
        )
    }

    const renderWatchlist = () => {
        return(
            <Watchlist 
                isLoggedIn={isLoggedIn}
                user={user}
            />
        )
    }
    
   

    console.log("USER: ", user)
    console.log('isLoggedIn', isLoggedIn)

    

    return(
        <GlobalProvider>
            <GlobalStyle />
            <Router>
        
            <Header
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
                user={user}
                />
                    <Switch>
                        <Route exact path='/' render={renderLogin} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/movie' component={renderHome}/>
                        <Route exact path='/movie/:movieId' component={Movie}/>
                        <Route exact path='/watchlist' component={renderWatchlist}/>
                        <Route exact path='/watchlist/add' component={Add}/>
                        <Route exact path='/watchlist/watched' component={Watched}/>
                    </Switch>
            </Router>
        </GlobalProvider>
   
    );
};
export default App;
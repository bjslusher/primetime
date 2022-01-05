import React from "react";
//styles
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Activate from "./components/Activate";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Layout from "./hoc/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import {Watchlist} from './components/Watchlist';
import Add from "./components/Add";
import Watched from "./components/Watched";
import { GlobalProvider } from './context/GlobalState';
import './lib/font-awesome/css/all.min.css';
import "./App.css";





const App = () => (
    <Provider store={store}>
        <GlobalProvider>
        <GlobalStyle />
        <Router>
            <Header />
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/movie/:movieId' component={Movie} />
                    {/* <Route exact path='/*' component={NotFound} /> */}
                    <Route exact path='/watchlist' component={Watchlist} />
                    <Route exact path='/watchlist/add' component={Add} />
                    <Route exact path='/watchlist/watched' component={Watched} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>   
        </Router>
        </GlobalProvider>
    </Provider>
);

export default App;
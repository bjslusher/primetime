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



const App = () => (
    <Provider store={store}>
        
        <GlobalStyle />
        <Router>
            <Header />
            <Layout>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/:movieId' component={Movie} />
                    <Route exact path='/*' component={NotFound} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>   
        </Router>
    </Provider>
);

export default App;
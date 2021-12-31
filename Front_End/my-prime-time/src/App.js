import React from "react";
//styles
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Activate from "./containers/Activate";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Layout from "./hoc/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header'


function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <GlobalStyle />
        </div>
    );
}
// const App = () => (
//     <Provider store={store}>
//         <Header />
//         <GlobalStyle />
//         <Router>
//             <Layout>
//                 <Switch>
//                     <Route exact path='/' component={Home} />
//                     <Route exact path='/login' component={Login} />
//                     <Route exact path='/signup' component={Signup} />
//                     <Route exact path='/reset-password' component={ResetPassword} />
//                     <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
//                     <Route exact path='/activate/:uid/:token' component={Activate} />
//                 </Switch>
//             </Layout>   
//         </Router>
//     </Provider>
// );

export default App;
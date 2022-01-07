import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { Wrapper } from "./Header/Header.styles";


const Login = (props) => {
    
   
    
    return (
        <div>
        {
            !props.isLoggedIn
            ?
        <Wrapper>
            <div className='container mt-5'>
                <h1>Sign In</h1>
                <p>Sign In To View Content</p>
                <form onSubmit={props.handleLogin}>
                    <div className="form-group">
                        <label className="form-label">Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            
                        />
                    </div>
                    <button className="btn login-btn" type="submit">Login</button>
                </form>
                <p className="mt-3">
                    Need an Account?  <Link to='/signup'>Sign Up</Link>
                </p>
            </div>
        </Wrapper>
            :
            <Redirect to='/movie'/>
        };
       </div> 
    );

};


export default Login;
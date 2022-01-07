import React from "react";
import { Link, Redirect } from 'react-router-dom';
import UserApi from "../UserApi";
import { Wrapper } from "./Header/Header.styles";

const Signup = (props) => {

    const handleSignup = async (evt) => {
        evt.preventDefault();
        let userObject = {
            'username': evt.target.username.value,
            'password': evt.target.password.value
        }
        let response = await UserApi.signupUser(userObject);
        let data = await response.json();
        if (data.error) {
            console.log('error signing up');
        } else{
            return(
            <Redirect to='/' />
            )
        }
    }
    return(
        <Wrapper>
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Fill this out to create an account</p>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        
                    />
                </div>
                <button className="btn login-btn" type="submit"><Link to='/'>Signup</Link></button>
            </form>
            <p className="mt-3">
                Already have an Account? <Link to='/'>Log In</Link>
            </p>
        </div>
        </Wrapper>
    );

 };
 
 export default Signup;
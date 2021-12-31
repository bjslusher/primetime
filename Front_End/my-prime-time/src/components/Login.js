import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { Wrapper } from "./Header/Header.styles";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);

    };

    if (isAuthenticated) {
        return <Redirect to='/home' />
    }

   
    
    return (
        <Wrapper>
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign In To View Content</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p className="mt-3">
                Need an Account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className="mt-3">
                Forgot Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
        </Wrapper>
    );

};

const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });

export default connect(mapStateToProps, { login })(Login);
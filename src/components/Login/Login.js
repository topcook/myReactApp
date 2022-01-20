import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

export default function Login({ setToken }) {
    return (
        <div className='login=wrapper'>
            <h1>Please Login.</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propoTyps = {
    setToken: PropTypes.func.isRequired
}
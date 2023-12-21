import React, { useState, useEffect, useReducer, useContext } from 'react';
import { useStateValue } from 'StateProvider';
import 'Login.css';
import auth from 'firebase';
import provider from 'firebase';
import { actionTypes } from 'reducer';

const Login = () => {
 const [state, dispatch] = useStateValue();

 const signIn = () => {
  auth.signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });
    })
    .catch(error => {
      alert(error.message);
    });
 }

 return (
  <div className="login">
    <div className="login_container">
      <img src="logo.png" alt='whatsapp logo' />
      <div className="login_text">
        <h1>Sign in to Messaging App</h1>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    </div>
  </div>
 );
}

export default Login;
